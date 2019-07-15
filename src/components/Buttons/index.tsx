import React from "react"
import styles from "./styles.module.scss"
import { joinFilter, capitalizeWord } from "@utils/helpers"

interface Props {
  className?: string
  children: any
  align?: string
}

const Buttons: React.SFC<Props> = ({
  children,
  className,
  align = "center",
  ...props
}) => {
  const styleOptions = [
    className ? className : "",
    styles.buttons,
    align ? styles[`align${capitalizeWord(align)}`] : "",
  ]

  return (
    <div {...props} className={joinFilter(styleOptions)}>
      {children}
    </div>
  )
}

export default Buttons
