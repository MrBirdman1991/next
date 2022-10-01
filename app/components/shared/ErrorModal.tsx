import {  FC } from 'react';
import classes from './error-alert.module.css';

interface IProps{
  children: JSX.Element[] | JSX.Element
}

const ErrorAlert: FC<IProps>= (props) => {
  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;
