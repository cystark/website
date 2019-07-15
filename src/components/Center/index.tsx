import React from "react"
import styles from "./styles.module.scss"
import { capitalizeWord, joinFilter } from "../../utils/helpers"

interface Props {
  className?: string
  type?: string
  mobile?: string
}

const Center: React.FunctionComponent<Props> = ({
  children,
  className,
  type = "center",
  mobile = "center",
  ...props
}) => {
  const styleOptions = [
    type ? styles[type] : "",
    className ? className : "",
    mobile ? styles[`mobile${capitalizeWord(mobile)}`] : "",
  ]

  return (
    <div {...props} className={joinFilter(styleOptions)}>
      {children}
    </div>
  )
}

export default Center
