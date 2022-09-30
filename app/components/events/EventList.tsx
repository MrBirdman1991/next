import React, { FC } from "react";
import { IEvent } from "../../DUMMY_DATA";
import { EventItem } from "./EventItem";

import classes from "./list.module.css";

interface IProps {
  items: IEvent[];
}

export const EventList: FC<IProps> = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((event) => {
        return <EventItem {...event} key={event.id} />;
      })}
    </ul>
  );
};
