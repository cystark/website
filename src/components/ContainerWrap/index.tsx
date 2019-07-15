import React from "react"
import styles from "./styles.module.scss"
import textStyle from "@styles/text.module.scss"
import paddingStyle from "@styles/padding.module.scss"
import {
  paddingOptions,
  textAlignOptions,
  containerOptions,
} from "@type/options"
import { joinFilter } from "@utils/helpers"

interface Props {
  className?: string
}

const ContainerWrap: React.StatelessComponent<
  Props & paddingOptions & textAlignOptions & containerOptions
> = ({
  className,
  container = "wide",
  textAlign = "left",
  padding = "small",
  children,
}) => {
  const containerStyle = container || "container"

  const styleOptions: Array<any> = [
    className,
    styles.container,
    styles[containerStyle],
    textAlign ? textStyle[textAlign] : "",
    padding ? paddingStyle[padding] : "",
  ]

  return <div className={joinFilter(styleOptions)}>{children}</div>
}

export default ContainerWrap
