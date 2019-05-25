import React from "react"
import styles from "./styles.module.css"

import LogoHero from "../components/LogoHero"
import Illustration from "../components/Illustration"

interface DataProps {
  location: string
}

const HomePage: React.StatelessComponent<DataProps> = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.scrollBlock}>
      <div className={styles.hero}>
        <LogoHero />
        <Illustration />
      </div>
      {children}
    </div>
  </div>
)

export default HomePage
