import { FC } from 'react';
import {Button} from '../shared/Button';
import classes from './results-title.module.css';

interface IProps{
  date: Date;
}

const ResultsTitle: FC<IProps> = ({date}) => {

  const humanReadableDate = new Date(date).toLocaleDateString('de-DE', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button href='/events'>Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
