import { FC } from "react";
import classes from "./event-content.module.css";

const EventContent: FC<{children: JSX.Element}> = (props) => {
  return <section className={classes.content}>{props.children}</section>;
};

export default EventContent;
