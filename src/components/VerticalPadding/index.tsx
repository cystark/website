import React from "react"
import styles from "./styles.module.scss"

interface Props {
  padding?: string
}

const VerticalPadding: React.FunctionComponent<Props> = ({
  padding,
  children,
}) => {
  const paddingStyle = padding || "small"
  return <div className={styles[paddingStyle]}>{children}</div>
}

export default VerticalPadding
