import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { EventList } from '../components/events/EventList'
import { getFeaturedEvents, IEvent } from '../helper/api-util'

interface PageProps{
  events: IEvent[]
}

const HomePage: NextPage<PageProps> = ({events}) => {
  return (
    <div>
      <EventList items={events}/>
    </div>
  )
}

export  const getStaticProps: GetStaticProps = async() =>{
  const events = await getFeaturedEvents();
  return {
    props: {
      events
    },
    revalidate: 1800
  }
}

export default HomePage
