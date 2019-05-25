import React from "react"
import styles from "./styles.module.css"

interface Props {
  ratio: number
  children?: any
}

const AspectRatio: React.FunctionComponent<Props> = ({ ratio, children }) => {
  const ratioPadding = {
    paddingBottom: `${ratio * 100}%`,
  }

  return (
    <div style={ratioPadding} className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default AspectRatio
