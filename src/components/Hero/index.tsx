import React from "react"
import styles from "./styles.module.css"

import LogoHero from "../LogoHero"
import Illustration from "../Illustration"

interface Props {
  description: string
}

const Hero: React.FunctionComponent<Props> = ({ description }) => {
  return (
    <div className={styles.hero}>
      <LogoHero description={description} />
      <Illustration />
    </div>
  )
}

export default Hero
