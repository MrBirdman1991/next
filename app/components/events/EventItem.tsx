import React, { FC } from "react";
import { IEvent } from "../../DUMMY_DATA";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
import { Button } from "../shared/Button";

import classes from "./item.module.css";

export const EventItem: FC<IEvent> = ({ date, image, location, title, id }) => {
  const readableDate = new Date(date).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const adress = location.replace(", ", "\n");

  return (
    <li className={classes.item}>
      <img src={image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon/>
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon/>
            <address>{adress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button href={`/events/${id}`}><span>Explore Event</span><span className={classes.icon}><ArrowRightIcon/></span></Button>
        </div>
      </div>
    </li>
  );
};
