import { NextPage } from 'next'
import { useRouter } from 'next/router';
import React from 'react'
import { EventList } from '../../components/events/EventList';
import { EventsSearch } from '../../components/events/EventsSearch';
import { getAllEvents } from '../../DUMMY_DATA'

const EventsPage: NextPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  function onSearchHandler(year: string, month:string){
    router.push(`/events/${year}/${month}`);
  }

  if(!events || events.length === 0) return <h1>Nothing to see here officer</h1>

  return (
    <div>
      <EventsSearch onSearch={onSearchHandler}/>
      <EventList items={events}/>
    </div>
  )
}

export default EventsPage;