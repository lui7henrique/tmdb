import { stripe } from '@/services/stripe'
import { NextRequest } from 'next/server'
import { Stripe } from 'stripe'

export async function POST(req: NextRequest) {
  const url = new URL(req.url)

  const email = url.searchParams.get('email')
  const username = url.searchParams.get('username')
  const locale = (url.searchParams.get('locale') ??
    'en') as Stripe.Checkout.SessionCreateParams.Locale

  // TODO: REFATORAR ISSO
  const prices = await stripe.prices.list({
    product:
      process.env.NODE_ENV === 'development'
        ? 'prod_RATX2kocUmZGdH'
        : 'prod_PrlSkiekCRFLto',
  })

  console.log({ prices })

  const priceByLocale = prices.data.find((price) => {
    if (locale === 'ja') {
      return price.currency === 'jpy'
    }

    if (['de', 'es', 'fr', 'it'].includes(locale)) {
      return price.currency === 'eur'
    }

    if (locale === 'pt') {
      return price.currency === 'brl'
    }

    return price.currency === 'usd'
  })

  if (stripe && prices && email) {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: priceByLocale ? priceByLocale.id : prices.data[0].id,
            quantity: 1,
          },
        ],
        mode: 'subscription',
        success_url: `${url.origin}/${username}`,
        cancel_url: `${url.origin}/`,
        locale,
        customer_email: email,
      })

      if (session.url) {
        return Response.redirect(session.url, 303)
      }
    } catch (err) {
      console.log(err)
    }
  }
}
