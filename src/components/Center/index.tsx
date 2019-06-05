import React from "react"
import styles from "./styles.module.scss"
import { capitalizeWord, joinFilter } from "../../utils/helpers"

interface Props {
  className: string
  type: string
  style: string
}

const Center: React.FunctionComponent<Props & paddingOptions> = ({
  children,
  className,
  type = "center",
  mobile = "center",
  style,
}) => {
  const styleOptions = [
    type ? styles[type] : "",
    className,
    mobile ? styles[`mobile${capitalizeWord(mobile)}`] : "",
  ]

  return (
    <div className={joinFilter(styleOptions)} style={style}>
      {children}
    </div>
  )
}

export default Center
