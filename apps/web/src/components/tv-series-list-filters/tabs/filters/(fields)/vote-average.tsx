import type { TvSeriesListFiltersFormValues } from '@/components/tv-series-list-filters'
import { useLanguage } from '@/context/language'
import {
  FormControl,
  FormItem,
  FormLabel,
} from '@plotwist/ui/components/ui/form'
import { Slider } from '@plotwist/ui/components/ui/slider'
import { useFormContext } from 'react-hook-form'
import { v4 } from 'uuid'

export const VoteAverageField = () => {
  const {
    dictionary: {
      movies_list_filters: {
        vote_average_field: { label },
      },
    },
  } = useLanguage()

  const { setValue, watch } = useFormContext<TvSeriesListFiltersFormValues>()

  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>

      <FormControl>
        <div className="space-y-2">
          <Slider
            max={10}
            min={0}
            step={1}
            defaultValue={[0, 10]}
            value={[watch('vote_average.gte'), watch('vote_average.lte')]}
            onValueChange={([start, end]) => {
              setValue('vote_average.gte', start)
              setValue('vote_average.lte', end)
            }}
          />

          <div className="flex w-full justify-between border-t">
            {Array.from({ length: 11 }).map((_, index) => (
              <div
                className="relative flex translate-x-[3px] flex-col items-center"
                key={v4()}
              >
                <div className="h-[4px] w-[1px] bg-muted" />
                <div className="text-xs">{index}</div>
              </div>
            ))}
          </div>
        </div>
      </FormControl>
    </FormItem>
  )
}
