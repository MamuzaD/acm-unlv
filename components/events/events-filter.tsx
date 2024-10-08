'use client'

import { useEffect, useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { EventsContainer } from './events-container'


export const EventsFilter = () => {
  const [selectedType, setSelectedType] = useState< 'General' | 'Competition' | 'Workshop' | 'All'>('All')

  const handleToggleChange = (value: string) => {
    setSelectedType(value as 'General' | 'Competition' | 'Workshop' | 'All')
  }

   useEffect(() => {
     if (!selectedType) {
       setSelectedType('All')
     }
   }, [selectedType])

  return (
    <>
      <div className="mx-4 flex w-full max-w-sm  justify-between lg:max-w-3xl">
        <h1 className="text-2xl md:text-5xl">Events</h1>
        <div className="hidden lg:flex">
          <ToggleGroup type="single" variant="outline" value={selectedType} onValueChange={handleToggleChange}>
            <ToggleGroupItem value="General" aria-label="Toggle general" className="font-semibold">
              General
            </ToggleGroupItem>
            <ToggleGroupItem value="Competition" aria-label="Toggle competition" className="font-semibold">
              Competition
            </ToggleGroupItem>
            <ToggleGroupItem value="Workshop" aria-label="Toggle workshops" className="font-semibold">
              Workshops
            </ToggleGroupItem>
            <ToggleGroupItem value="All" aria-label="Show all events" className="font-semibold">
              All
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="lg:hidden">
          <Select value={selectedType} onValueChange={handleToggleChange}>
            <SelectTrigger className="font-semibold">
              <SelectValue placeholder="All"/>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="All" className="font-semibold">
                  All
                </SelectItem>
                <SelectItem value="General" className="font-semibold">
                  General
                </SelectItem>
                <SelectItem value="Competition" className="font-semibold">
                  Competition
                </SelectItem>
                <SelectItem value="Workshop" className="font-semibold">
                  Workshops
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <EventsContainer selectedType={selectedType} />
    </>
  )
}
