import React from "react"
import styles from "./styles.module.scss"
import SiteData from "../../context/SiteData"
import { Link } from "gatsby"
import Button from "../Button"
import inlineIcon from "../../utils/inlineIcon"
import { connect } from "react-redux"
import { toggleModal } from "../../state/actions"

interface Props {
  className?: string
}

const Nav: React.FunctionComponent<Props> = ({
  openModal,
  dispatch,
  className,
}) => {
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
          {Object.keys(socialLinks).map((social: string, i: number) => (
            <li className={styles.navItem} key={i}>
              {social == "email" ? (
                <a
                  className={styles.navLink}
                  onClick={e => {
                    e.preventDefault()
                    dispatch(toggleModal(!openModal))
                  }}
                  href={socialLinks.email.link}
                >
                  {inlineIcon(social)}
                </a>
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

export default connect(
  ({ openModal }) => ({ openModal }),
  null
)(Nav)
