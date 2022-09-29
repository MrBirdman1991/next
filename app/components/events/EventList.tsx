import React, { FC } from "react";
import { IEvent } from "../../DUMMY_DATA";
import { EventItem } from "./EventItem";

interface IProps {
  items: IEvent[];
}

export const EventList: FC<IProps> = ({ items }) => {
  return (
    <ul>
      {items.map((event) => {
        return <EventItem {...event} key={event.id} />;
      })}
    </ul>
  );
};
