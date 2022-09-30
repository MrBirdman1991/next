import Link from "next/link";
import React, { FC } from "react";
import classes from "./button.module.css";

interface IProps {
  children: React.ReactNode;
  href: string;
}

export const Button: FC<IProps> = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className={classes.btn}> {children}</a>
    </Link>
  );
};
