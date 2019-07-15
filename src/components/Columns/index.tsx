import React from "react"
import styles from "./styles.module.scss"

interface Props {
  multi?: boolean
  className?: string
  direction?: string
  isGapless?: boolean
}

const Columns: React.FunctionComponent<Props> = ({
  children,
  multi = false,
  direction = "row",
  isGapless,
  className,
}) => {
  const styleOptions = [
    styles.container,
    className ? className : "",
    multi ? styles.multi : "",
    isGapless ? styles.isGapless : "",
    direction == "row" ? styles.directionRow : styles.directionColumn,
  ]
  return <div className={styleOptions.join(" ")}>{children}</div>
}

export default Columns
