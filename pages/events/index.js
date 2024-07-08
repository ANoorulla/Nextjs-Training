import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "../../dummy-data";

import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  function findEventHandler(year, month) {
    const pullPath = `/events/${year}/${month}`;
    router.push(pullPath);
  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
