import React from "react"
import styles from './styles.module.css'

interface Props  {
  text?: string
}

const Footer: React.FunctionComponent<Props> = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerInner}>
        <p>Designed and Developed By Cam Y Stark 2019</p>
      </div>
    </div>
  )
}

export default Footer
