import Link from "next/link";
import React, { FC } from "react";
import classes from "./button.module.css";

interface BaseProps {
  children: React.ReactNode;
}

interface LinkComponent extends BaseProps {
  href: string;
}

export interface ButtonComponent extends BaseProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export type IProps = LinkComponent | ButtonComponent;

export const Button: FC<IProps> = (props) => {
  if ("href" in props) {
    return (
      <Link href={props.href}>
        <a className={classes.btn}> {props.children}</a>
      </Link>
    );
  }

  return (
    <button onClick={(e) => props.onClick(e)} className={classes.btn}>
      {props.children}
    </button>
  );
};
