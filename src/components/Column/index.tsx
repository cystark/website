import React from "react"
import styles from "./styles.module.scss"
import paddingStyles from "../../styles/padding.module.scss"
import themeStyles from "../Theme/styles.module.scss"
import { capitalizeWord, joinFilter } from "../../utils/helpers"
import { paddingOptions } from "../../type/options"

interface Props {
  desktop?: "sidebar" | "full" | "half" | "twoFifths" | "one-third"
  mobile?: "full"
  style?: object
}

const Column: React.FunctionComponent<Props & paddingOptions> = ({
  children,
  desktop,
  style,
  mobile,
  className,
  theme,
  align,
  padding,
}) => {
  const styleOptions = [
    styles.container,
    className,
    desktop ? styles[`desktop${capitalizeWord(desktop)}`] : "",
    mobile ? styles[`mobile${capitalizeWord(mobile)}`] : "",
    padding ? paddingStyles[padding] : "",
    align ? styles[`align${capitalizeWord(align)}`] : "",
    theme ? themeStyles[theme] : "",
  ]

  return (
    <div className={joinFilter(styleOptions)} style={style}>
      {children}
    </div>
  )
}

export default Column
