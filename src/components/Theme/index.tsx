import React from "react"
import styles from "./styles.module.scss"
import paddingStyles from "../../styles/padding.module.scss"
import { joinFilter } from "../../utils/helpers"
import paddingOptions from "../../type/options"

interface Props {
  theme?: "primary" | "wheat" | "blue" | "dark" | "black"
  gutter?: boolean
}

const Theme: React.FunctionComponent<Props & paddingOptions> = ({
  theme = "primary",
  padding,
  gutter = false,
  children,
}) => {
  const styleOptions = [
    theme ? styles[theme] : "",
    padding ? paddingStyles[padding] : "",
    gutter ? paddingStyles.gutterPadding : "",
  ]

  return <div className={joinFilter(styleOptions)}>{children}</div>
}

export default Theme
