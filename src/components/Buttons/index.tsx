import React from "react"
import styles from "./styles.module.scss"
import { joinFilter, capitalizeWord } from "../../utils/helpers"

interface Props {
  className: string
  align: string
  style: object
}

const Buttons: React.FunctionComponent<Props> = ({
  children,
  className,
  align,
  style,
}) => {
  const styleOptions = [
    className,
    styles.buttons,
    align ? styles[`align${capitalizeWord(align)}`] : "",
  ]

  return (
    <div className={joinFilter(styleOptions)} style={style}>
      {children}
    </div>
  )
}

export default Buttons
