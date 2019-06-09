import React from "react"
import styles from "./styles.module.scss"
import textStyle from "../../styles/text.module.scss"
import { textAlignOptions } from "../../type/options"
import { joinFilter, capitalizeWord } from "../../utils/helpers"

interface Props {
  className?: string
  children: string
  bottomPadding: string
  size: string
}

const Title: React.FunctionComponent<Props & textAlignOptions> = ({
  children,
  className,
  size = "normal",
  textAlign = "left",
  bottomPadding = "normal",
}) => {
  const styleOptions = [
    className && className,
    styles.title,
    bottomPadding
      ? styles[`bottomPadding${capitalizeWord(bottomPadding)}`]
      : "",
    size ? styles[`size${capitalizeWord(size)}`] : "",
    textStyle ? textStyle[textAlign] : "",
  ]

  return <h3 className={joinFilter(styleOptions)}>{children}</h3>
}

export default Title
