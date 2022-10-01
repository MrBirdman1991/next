import { useRouter } from "next/router";
import React from "react";
import { EventList } from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultTitle";
import { Button } from "../../components/shared/Button";
import ErrorModal from "../../components/shared/ErrorModal";
import { getFilteredEvents } from "../../DUMMY_DATA";

const FilteredEventsPage = () => {
  const router = useRouter();

  const slug = router.query.slug;

  if (!slug || isNaN(+slug[0]) || isNaN(+slug[1])) {
    return (
      <ErrorModal>
        <h1>Nothing too see here officer</h1>
        <p>Wrong Filter</p>
        <Button href="/events">Go Back to all Events</Button>
      </ErrorModal>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: +slug[0],
    month: +slug[1],
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <ErrorModal>
        <p>No event found by filter</p>
        <Button href="/events">Go Back to all Events</Button>
      </ErrorModal>
    );
  }

  const date = new Date(+slug[0], +slug[1] - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default FilteredEventsPage;
