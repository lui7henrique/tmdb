'use client'

import Link from 'next/link'
import { format } from 'date-fns'
import { ColumnDef } from '@tanstack/react-table'

import { Badge } from '@/components/ui/badge'
import { TableColumnHeader } from '@/components/table'

import { ListItem } from '@/types/supabase/lists'

import { Dictionary } from '@/utils/dictionaries'
import { locale } from '@/utils/date/locale'
import { Language } from '@/types/languages'
import { ListItemActions } from '../list-items'

type Columns = (
  dictionary: Dictionary,
  language: Language,
  mode: 'EDIT' | 'SHOW',
) => ColumnDef<ListItem>[]

export const columns: Columns = (dictionary, language, mode) => {
  const commonColumns: ColumnDef<ListItem>[] = [
    {
      id: dictionary.data_table_columns.index,
      accessorKey: 'index',
      header: ({ column }) => <TableColumnHeader column={column} title="" />,
      cell: ({ row }) => {
        return (
          <span className="select-none font-bold text-muted-foreground">
            {row.index + 1}.
          </span>
        )
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: dictionary.data_table_columns.title,
      accessorKey: 'title',
      header: ({ column }) => (
        <TableColumnHeader
          column={column}
          title={dictionary.data_table.title}
          className="w-[200px]"
        />
      ),
      cell: ({ row }) => {
        const { media_type: mediaType, tmdb_id: tmdbId, title } = row.original

        const href = `/${language}/${
          mediaType === 'TV_SHOW' ? 'tv-series' : 'movies'
        }/${tmdbId}`

        return (
          <Link href={href} className="underline-offset-4 hover:underline">
            {title}
          </Link>
        )
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      id: dictionary.data_table_columns.type,
      accessorKey: 'media_type',
      header: ({ column }) => (
        <TableColumnHeader column={column} title={dictionary.data_table.type} />
      ),
      cell: ({ row }) => {
        const columnId = dictionary.data_table_columns.type

        const movie = dictionary.data_table_columns.movie
        const tvSerie = dictionary.data_table_columns.tv_serie

        return (
          <Badge variant="outline" className="whitespace-nowrap">
            {row.getValue(columnId) === 'MOVIE' ? movie : tvSerie}
          </Badge>
        )
      },
    },
    {
      id: dictionary.data_table_columns.added_at,
      accessorKey: 'created_at',
      header: ({ column }) => (
        <TableColumnHeader
          column={column}
          title={dictionary.data_table.added_at}
        />
      ),
      cell: ({ row }) => {
        const columnId = dictionary.data_table_columns.added_at

        return (
          <p className="whitespace-nowrap text-xs">
            {format(new Date(row.getValue(columnId)), 'PPP', {
              locale: locale[language],
            })}
          </p>
        )
      },
    },
  ]

  const editModeColumns: ColumnDef<ListItem>[] = [
    {
      id: 'options',
      accessorKey: '',
      header: ({ column }) => (
        <TableColumnHeader
          column={column}
          title=""
          className="flex justify-end"
        />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex justify-end">
            <ListItemActions listItem={row.original} />
          </div>
        )
      },
    },
  ]

  return mode === 'EDIT'
    ? [...commonColumns, ...editModeColumns]
    : commonColumns
}
