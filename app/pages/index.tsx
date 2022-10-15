import type { GetStaticProps, NextPage } from 'next'
import { EventList } from '../components/events/EventList'
import NewsletterRegistration from '../components/input/newsletter-registration'
import { getFeaturedEvents, IEvent } from '../helper/api-util'

interface PageProps{
  events: IEvent[]
}

const HomePage: NextPage<PageProps> = ({events}) => {
  return (
    <div>
      <NewsletterRegistration/>
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
