import React from "react"
import styles from "./styles.module.scss"
import textStyle from "../../styles/text.module.scss"
import { textAlignOptions } from "../../type/options"

interface Props {
  className?: string
  children: string
}

const Title: React.FunctionComponent<Props & textAlignOptions> = ({
  children,
  className,
  textAlign = "left",
}) => {
  const styleOptions = [
    className && className,
    styles.title,
    textAlign && textStyle[textAlign],
  ]
  console.log(styleOptions)
  return <h3 className={styleOptions.join(" ")}>{children}</h3>
}

export default Title
