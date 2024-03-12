'use client'

import { createContext, useContext, useState } from 'react'
import {
  AuthContext,
  AuthContextProviderProps,
  SignInCredentials,
  SignUpCredentials,
} from './auth.types'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { User } from '@supabase/supabase-js'

import { useLanguage } from '../language'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export const authContext = createContext({} as AuthContext)

export const AuthContextProvider = ({
  children,
  initialUser,
}: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(initialUser)
  const { dictionary, language } = useLanguage()
  const supabase = createClientComponentClient()
  const { push } = useRouter()

  const signInWithCredentials = async (credentials: SignInCredentials) => {
    const { error, data } = await supabase.auth.signInWithPassword(credentials)

    if (error) {
      toast.error(dictionary.login_form.invalid_login_credentials, {
        action: {
          label: dictionary.login_form.try_again,
          onClick: () => signInWithCredentials(credentials),
        },
      })

      return
    }

    if (data) {
      push(`/${language}/home`)
      setUser(data.user)
      toast.success(dictionary.login_form.login_success)
    }
  }

  const signUpWithCredentials = async ({
    username,
    ...credentials
  }: SignUpCredentials) => {
    const { error } = await supabase.auth.signUp({
      ...credentials,
      options: {
        data: {
          username,
        },
      },
    })

    if (error) {
      toast.error(error.message, {
        action: {
          label: dictionary.login_form.try_again,
          onClick: () => signUpWithCredentials({ username, ...credentials }),
        },
      })

      return
    }

    toast.success(dictionary.sign_up_form.sign_up_success)
    await signInWithCredentials(credentials)
  }

  const logout = async () => {
    const { error } = await supabase.auth.signOut()

    if (error) {
      toast.error(error.message, {
        action: {
          label: dictionary.sign_up_form.try_again,
          onClick: () => logout(),
        },
      })

      return
    }

    toast.success(dictionary.auth.logout_success)
    setUser(null)
  }

  return (
    <authContext.Provider
      value={{ user, signInWithCredentials, signUpWithCredentials, logout }}
    >
      {children}
    </authContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(authContext)

  if (!context) {
    throw new Error('ListsContext must be used within ListsContextProvider')
  }

  return context
}
