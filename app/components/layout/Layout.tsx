import React, {FC} from 'react'
import { Header } from './Header'


export const Layout: FC<{children: JSX.Element}> = (props) => {
  return (
    <>
    <Header/>
    <main>{props.children}</main>
    </>
  )
}
