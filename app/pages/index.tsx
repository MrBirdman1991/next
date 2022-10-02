import type { NextPage } from 'next'
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

export async function getStaticProps(){
  const events = await getFeaturedEvents();
  return {
    props: {
      events
    },
    revalidate: 10
  }
}

export default HomePage
