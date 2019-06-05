import React from "react"
import styles from "./styles.module.scss"

interface Props {
  multi?: boolean
}

const Columns: React.FunctionComponent<Props> = ({
  children,
  multi = false,
  style = null,
  direction = "row",
  isGapless,
}) => {
  const styleOptions = [
    styles.container,
    multi ? styles.multi : "",
    isGapless ? styles.isGapless : "",
    direction == "row" ? styles.directionRow : styles.directionColumn,
  ]
  return (
    <div className={styleOptions.join(" ")} style={style}>
      {children}
    </div>
  )
}

export default Columns
