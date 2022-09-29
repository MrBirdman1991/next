import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { IEvent } from "../../DUMMY_DATA";

export const EventItem: FC<IEvent> = ({ date, image, location, title }) => {
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <div>
          <time>{date}</time>
        </div>
        <div>
          <address>{location}</address>
        </div>
      </div>
      <div>
        <Link href="/">Explore Event</Link>
      </div>
    </li>
  );
};
