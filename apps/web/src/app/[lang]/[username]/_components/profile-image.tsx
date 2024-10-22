'use client'

import { ImagePicker } from '@/components/image-picker'
import { useAuth } from '@/context/auth'
import { useLanguage } from '@/context/language'
import { useProfile } from '@/hooks/use-profile'
import { getProfileByUsername } from '@/services/api/profiles'
import { Profile } from '@/types/supabase'
import { tmdbImage } from '@/utils/tmdb/image'
import { useQuery } from '@tanstack/react-query'
import { Pencil } from 'lucide-react'
import Image from 'next/image'
import { toast } from 'sonner'

type ProfileImageProps = {
  profile: Profile
}

export const ProfileImage = ({ profile }: ProfileImageProps) => {
  const { username } = profile
  const { dictionary } = useLanguage()
  const { user } = useAuth()

  const { data: profileImagePath } = useQuery({
    queryKey: ['profile-image', username],
    queryFn: async () => await getProfileByUsername(username),
    select: (data) => {
      return data?.image_path
    },
    initialData: profile,
  })

  const { updateImagePathMutation } = useProfile()

  const mode = user?.id === profile.id ? 'EDIT' : 'SHOW'

  if (mode === 'SHOW') {
    return (
      <div className="relative z-40 flex aspect-square w-32 items-center justify-center overflow-hidden rounded-full border bg-muted text-3xl lg:w-48">
        {profileImagePath ? (
          <Image
            src={tmdbImage(profileImagePath)}
            fill
            alt=""
            className="object-cover"
          />
        ) : (
          profile.username?.at(0)?.toUpperCase()
        )}
      </div>
    )
  }

  return (
    <ImagePicker.Root
      onSelect={(image, closeModal) =>
        updateImagePathMutation.mutate(
          {
            newImagePath: image.file_path,
            username: String(username),
          },

          {
            onSettled: () => {
              closeModal()

              toast.success(dictionary.profile_image_changed_successfully)
            },
          },
        )
      }
    >
      <ImagePicker.Trigger>
        <div className="group relative z-40 flex aspect-square w-32 cursor-pointer items-center justify-center overflow-hidden rounded-full border bg-muted text-3xl lg:w-48">
          {profileImagePath ? (
            <Image
              src={tmdbImage(profileImagePath)}
              fill
              alt=""
              className="object-cover"
            />
          ) : (
            profile.username?.at(0)?.toUpperCase()
          )}

          <div className="absolute flex h-full w-full items-center justify-center bg-black/50 opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100">
            <div className="scale-0 text-white transition-all group-hover:scale-100">
              <Pencil />
            </div>
          </div>
        </div>
      </ImagePicker.Trigger>
    </ImagePicker.Root>
  )
}
