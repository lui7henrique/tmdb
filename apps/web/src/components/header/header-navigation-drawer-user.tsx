import { LogOut } from 'lucide-react'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@plotwist/ui/components/ui/avatar'

import { logout } from '@/actions/auth/logout'
import { useLanguage } from '@/context/language'
import type { User } from '@/types/user'
import { Link } from 'next-view-transitions'

type HeaderNavigationDrawerUserProps = {
  user: User
}

export const HeaderNavigationDrawerUser = ({
  user,
}: HeaderNavigationDrawerUserProps) => {
  const { language, dictionary } = useLanguage()

  if (!user) return

  return (
    <div className="space-y-4">
      <Link
        href={`/${language}/${user.username}`}
        className="flex items-center justify-between px-2"
      >
        <span className="font-medium">{user.username}</span>

        <Avatar className="size-10 border">
          {user.avatarUrl && (
            <AvatarImage src={user.avatarUrl} className="object-cover" />
          )}

          <AvatarFallback>{user.username?.at(0)}</AvatarFallback>
        </Avatar>
      </Link>

      <form action={() => logout(language)} className="w-full">
        <button
          className="flex items-center justify-between gap-2 rounded-md p-2 text-sm font-medium hover:bg-muted w-full"
          type="submit"
        >
          {dictionary.logout}
          <LogOut className="size-4" />
        </button>
      </form>
    </div>
  )
}
