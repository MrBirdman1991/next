import { NextPage } from 'next'
import React from 'react'
import { EventList } from '../../components/events/EventList';
import { EventsSearch } from '../../components/events/EventsSearch';
import { getAllEvents } from '../../DUMMY_DATA'

const EventsPage: NextPage = () => {
  const events = getAllEvents();

  if(!events || events.length === 0) return <h1>Nothing to see here officer</h1>

  return (
    <div>
      <EventsSearch/>
      <EventList items={events}/>
    </div>
  )
}

export default EventsPage;