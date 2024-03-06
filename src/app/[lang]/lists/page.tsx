import { PageProps } from '@/types/languages'
import { Lists } from './_components/lists'
import { getDictionary } from '@/utils/dictionaries'

const ListsPage = async ({ params }: PageProps) => {
  const dictionary = await getDictionary(params.lang)

  return (
    <div className="mx-auto max-w-6xl space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{dictionary.lists_page.title}</h1>
          <p className="text-muted-foreground">
            {dictionary.lists_page.description}
          </p>
        </div>
      </div>

      <Lists />
    </div>
  )
}

export default ListsPage
