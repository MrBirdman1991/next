import React, { FC } from 'react'
import classes from "./event-summary.module.css"

interface IProps{
  title: string
}

const EventSummary: FC<IProps> = ({title}) => {
  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary
