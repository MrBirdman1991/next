import React, { FC } from "react";
import { getEventById, getAllEvents, IEvent } from "../../helper/api-util";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

const SingleEventPage: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
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
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const events = await getAllEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{
  event: IEvent | undefined;
}> = async (context) => {
  const id = context.params?.eventId;

  if (!id || Array.isArray(id)) {
    return {
      notFound: true,
    };
  }

  const event = await getEventById(id);
  return {
    props: {
      event,
    },
  };
};

export default SingleEventPage;
