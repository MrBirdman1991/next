import type { NextPage } from 'next'
import { EventList } from '../components/events/EventList'
import { getFeaturedEvents } from '../DUMMY_DATA'

const HomePage: NextPage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents}/>
    </div>
  )
}

export default HomePage
