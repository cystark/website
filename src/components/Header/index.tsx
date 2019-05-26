import { Link } from "gatsby"
import React from "react"
import styles from "./styles.module.css"
import VerticalPadding from "../VerticalPadding"
import ContainerWrap from "../ContainerWrap"
import inlineIcon from "../../utils/inlineIcon"
import socials from "../../../config/socials"

interface DataProps {
  menuLinks?: any
  siteTitle: any
}

const Header: React.StatelessComponent<DataProps> = ({
  menuLinks = [],
  siteTitle,
}) => {
  return (
    <nav className={styles.container}>
      <ContainerWrap className={styles.content} container={"wide"}>
        <a href="/" className={styles.logo}>
          {siteTitle}
        </a>
        <ul className={styles.nav}>
          {menuLinks.map((link: any) => (
            <li className={styles.navItem} key={link.link}>
              <Link className={styles.navLink} to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
          {socials.map((link: any) => (
            <li className={styles.navItem} key={link.link}>
              <a className={styles.navLink} href={link.link} target="_blank">
                {inlineIcon(link.name)}
              </a>
            </li>
          ))}
        </ul>
      </ContainerWrap>
    </nav>
  )
}

export default Header
