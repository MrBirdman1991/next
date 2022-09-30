import { useRouter } from 'next/router'
import React from 'react'
import { EventList } from '../../components/events/EventList';
import { getFilteredEvents } from '../../DUMMY_DATA';

const FilteredEventsPage = () => {
  const router = useRouter();

  const slug = router.query.slug;

  if(!slug || isNaN(+slug[0]) || isNaN(+slug[1]) ){
    return <h1>Nothing too see here officer</h1>
  }

  const filteredEvents = getFilteredEvents({
    year: +slug[0],
    month: +slug[1]
  })

  if(!filteredEvents || filteredEvents.length === 0) return <h1>Nothing too see here officer</h1>

  return (
    <EventList items={filteredEvents}/>
  )
}

export default FilteredEventsPage