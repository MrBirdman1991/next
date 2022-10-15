import React from "react";
import { getEventById, getFeaturedEvents, IEvent } from "../../helper/api-util";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import Comments from "../../components/input/comments";

const SingleEventPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  event,
}) => {
  if (!event) return <h1>No Event found</h1>;

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics {...event} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id}/>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));


  return { paths, fallback: "blocking" };
};

interface IParams extends ParsedUrlQuery {
  eventId: string
}

export const getStaticProps: GetStaticProps<{
  event: IEvent | undefined;
}> = async (context) => {
  const {eventId} = context.params as IParams;

  if (!eventId) {
    return {
      notFound: true,
    };
  }

  const event = await getEventById(eventId);

  if (!eventId || !event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      event,
    },
    revalidate: 30
  };
};

export default SingleEventPage;
