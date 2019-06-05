import { Link } from "gatsby"
import React from "react"
import styles from "./styles.module.scss"
import ContainerWrap from "../ContainerWrap"
import inlineIcon from "../../utils/inlineIcon"
import socials from "../../../config/socials"
import { Logo } from "../../inline-icons"

interface DataProps {
  menuLinks?: any
  soteTitle: any
}

const Header: React.StatelessComponent<DataProps> = ({
  menuLinks = [],
  siteTitle,
}) => {
  return (
    <nav className={styles.container}>
      <ContainerWrap className={styles.content} container={"wide"}>
        <h3 className={styles.logo}>
          <Logo />
          <a href="/">{siteTitle}</a>
        </h3>
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
