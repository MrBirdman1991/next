import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { EventList } from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultTitle";
import { Button } from "../../components/shared/Button";
import ErrorModal from "../../components/shared/ErrorModal";
import { IEvent } from "../../DUMMY_DATA";
import { getFilteredEvents } from "../../helper/api-util"

const FilteredEventsPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps> > = (props) => {
  const router = useRouter();
  const slug = router.query.slug;

  if (props.hasError || !slug) {
    return (
      <ErrorModal>
        <h1>Nothing too see here officer</h1>
        <p>Wrong Filter</p>
        <Button href="/events">Go Back to all Events</Button>
      </ErrorModal>
    );
  }

  const date = new Date(+slug[0], +slug[1] - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={props.events} />
    </>
  );
};

interface IParams extends ParsedUrlQuery {
  slug: string[];
}

export const getServerSideProps: GetServerSideProps<{hasError: boolean, events: IEvent[]}> = async(context) => {
  const { slug } = context.params as IParams;

  const year = +slug[0];
  const month = +slug[1];

  if (!slug || slug.length !== 2 || isNaN(year) || isNaN(month)) {
    return {
      props: {
        hasError: true,
        events: []
      }
    };
  }

  const events = await getFilteredEvents({year, month})

  if(!events || events.length === 0){
    return {
      props: {
        hasError: true,
        events: []
      }
    };
  }

  return {
    props: {
      hasError: false,
      events
    }
  };

};

export default FilteredEventsPage;
