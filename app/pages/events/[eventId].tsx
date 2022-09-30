import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../DUMMY_DATA";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const SingleEventPage = () => {
  const router = useRouter();
  const id = router.query.eventId as string;

  const event = getEventById(id);

  if(!event) return <h1>No Event found</h1>

  return (
    <>
    <EventSummary title={event.title}/>
    <EventLogistics {...event} imageAlt={event.title}/>
    <EventContent>
      <p>{event.description}</p>
    </EventContent>
    </>
  )
};

export default SingleEventPage;
