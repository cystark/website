import React from "react"
import styles from "./styles.module.scss"
import ContainerWrap from "../ContainerWrap"
import Logo from "../Logo"
import Nav from "../Nav"

const Header: React.StatelessComponent = () => {
  return (
    <nav className={styles.container}>
      <ContainerWrap className={styles.content} container={"wide"}>
        <Logo />
        <Nav />
      </ContainerWrap>
    </nav>
  )
}

export default Header
