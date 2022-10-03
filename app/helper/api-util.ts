export interface IEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

export async function getAllEvents() {
  const response = await fetch(
    "https://next-2314a-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  const events: IEvent[] = [];
  for (let key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
}

export async function getFeaturedEvents() {
  const events = await getAllEvents();
  return events.filter((event) => event.isFeatured);
}

export async function getEventById(id: string) {
  const events = await getAllEvents();

  return events.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter: { year: number; month: number }) {
  const { year, month } = dateFilter;
  const events = await getAllEvents();

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
