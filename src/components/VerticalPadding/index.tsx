import React from "react"
import styles from "./styles.module.css"

interface Props {
  padding: string
}

const VerticalPadding: React.FunctionComponent<Props> = ({
  padding,
  children,
}) => {
  return <div className={styles[padding]}>{children}</div>
}

export default VerticalPadding
