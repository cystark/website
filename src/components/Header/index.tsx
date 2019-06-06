import React from "react"
import styles from "./styles.module.scss"
import ContainerWrap from "../ContainerWrap"
import Logo from "../Logo"
import Nav from "../Nav"
import SiteData from "../../context/SiteData"

const Header: React.StatelessComponent = () => {
  return (
    <SiteData.Consumer>
      {({ title }) => (
        <nav className={styles.container}>
          <ContainerWrap className={styles.content} container={"wide"}>
            <Logo siteTitle={title} />
            <Nav />
          </ContainerWrap>
        </nav>
      )}
    </SiteData.Consumer>
  )
}

export default Header
