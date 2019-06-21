import React from "react"
import styles from "./styles.module.scss"
import SiteData from "../../context/SiteData"
import { Link } from "gatsby"
import inlineIcon from "../../utils/inlineIcon"
import ToggleModal from "../ToggleModal"

const Nav: React.FunctionComponent<Props> = () => {
  return (
    <SiteData.Consumer>
      {({ menuLinks = [], socialLinks }) => (
        <ul className={styles.nav}>
          {menuLinks.map((link: any) => (
            <li className={styles.navItem} key={link.link}>
              <Link className={styles.navLink} to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
          {Object.keys(socialLinks).map((social: string, i: number) => (
            <li className={styles.navItem} key={i}>
              {social == "email" ? (
                <ToggleModal>{inlineIcon(social)}</ToggleModal>
              ) : (
                <a
                  className={styles.navLink}
                  href={socialLinks[social].link}
                  target="_blank"
                >
                  {inlineIcon(social)}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </SiteData.Consumer>
  )
}

export default Nav
