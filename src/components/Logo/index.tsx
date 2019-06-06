import React from "react"
import styles from "./styles.module.scss"
import SiteData from "../../context/SiteData"
import { joinFilter } from "../../utils/helpers"
import { Logo as LogoSVG } from "../../inline-icons"

interface Props {
  className?: string
}

const Logo: React.FunctionComponent<Props> = ({ className }) => {
  const styleOptions = [styles.container, className]

  return (
    <SiteData.Consumer>
      {({ title }) => (
        <h3 className={joinFilter(styleOptions)}>
          <LogoSVG />
          <a href="/">{title}</a>
        </h3>
      )}
    </SiteData.Consumer>
  )
}

export default Logo
