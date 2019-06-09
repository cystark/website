import React from "react"
import styles from "./styles.module.scss"

const HighlightPoint: React.FunctionComponent = ({ children }) => {
  return <p className={styles.highlightPoint}>{children}</p>
}

export default HighlightPoint
