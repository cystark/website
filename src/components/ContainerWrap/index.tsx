import React from "react"
import styles from "./styles.module.scss"
import textStyle from "../../styles/text.module.scss"
import paddingStyle from "../../styles/padding.module.scss"
import { capitalizeWord, joinFilter } from "../../utils/helpers"

interface Props {
  className?: string
  container?: "small" | "large" | "wide"
  textAlign?: "center" | "left" | "right"
  padding?: "small" | "medium" | "large"
}

const ContainerWrap: React.FunctionComponent<Props> = ({
  className,
  container = "wide",
  textAlign = "left",
  padding = "small",
  children,
  style,
}) => {
  const containerStyle = container || "container"

  const styleOptions = [
    className,
    styles.container,
    styles[containerStyle],
    textAlign ? textStyle[textAlign] : "",
    padding ? paddingStyle[padding] : "",
  ]

  return (
    <div className={joinFilter(styleOptions)} style={style}>
      {children}
    </div>
  )
}

export default ContainerWrap
