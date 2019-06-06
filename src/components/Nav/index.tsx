import React from "react"
import styles from "./styles.module.scss"
import SiteData from "../../context/SiteData"
import { Link } from "gatsby"
import inlineIcon from "../../utils/inlineIcon"

interface Props {
  className?: string
}

const Nav: React.FunctionComponent<Props> = ({ className }) => {
  return (
    <SiteData.Consumer>
      {({ menuLinks, socialLinks }) => (
        <ul className={styles.nav}>
          {menuLinks.map((link: any) => (
            <li className={styles.navItem} key={link.link}>
              <Link className={styles.navLink} to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
          {socialLinks.map((link: any) => (
            <li className={styles.navItem} key={link.link}>
              <a className={styles.navLink} href={link.link} target="_blank">
                {inlineIcon(link.name)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </SiteData.Consumer>
  )
}

export default Nav
