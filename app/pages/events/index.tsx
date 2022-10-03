import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { useRouter } from 'next/router';
import React from 'react'
import { EventList } from '../../components/events/EventList';
import { EventsSearch } from '../../components/events/EventsSearch';
import { IEvent } from '../../DUMMY_DATA';
import { getAllEvents } from '../../helper/api-util'

const EventsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({events}) => {
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

export const getStaticProps: GetStaticProps<{events: IEvent[] | undefined}> = async () =>{
  const events = await getAllEvents();

  if(!events || events.length === 0){
    return {
      notFound: true
    }
  }

  return {
    props: {
      events
    },
    revalidate: 1800
  }
}

export default EventsPage;