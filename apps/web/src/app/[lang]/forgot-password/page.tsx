import { ForgotPasswordForm } from './_components/forgot-password-form'
import { PageProps } from '@/types/languages'
import { getDictionary } from '@/utils/dictionaries'
import { Pattern } from '@/components/pattern'
import { Metadata } from 'next'
import { AnimatedLink } from '@/components/animated-link'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang)
  const title = dictionary.access_plotwist

  return {
    title,
    openGraph: {
      title,
      siteName: 'Plotwist',
    },
    twitter: {
      title,
    },
  }
}

const ForgotPasswordPage = async ({ params: { lang } }: PageProps) => {
  const dictionary = await getDictionary(lang)

  return (
    <>
      <Pattern variant="checkered" />

      <div className="flex h-[calc(100svh-72px-54px)] w-full flex-col items-center justify-center p-4 lg:p-0">
        <div className="space-y- w-full max-w-[450px]">
          <div className="space-y-4">
            <h1 className="text-center text-3xl font-bold">
              {dictionary.forgot_your_password}
            </h1>

            <ForgotPasswordForm />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-full border bg-muted p-4 dark:bg-black dark:text-white flex items-center justify-center flex-col space-y-1">
        <p className="text-center text-xs text-muted-foreground">
          {dictionary.remembered_your_password}{' '}
        </p>
        <AnimatedLink href={`/${lang}/sign-in`} className="text-md font-medium">
          {dictionary.login}
        </AnimatedLink>
      </div>
    </>
  )
}

export default ForgotPasswordPage
