import React from "react"
import styles from "./styles.module.scss"
import paddingStyles from "@styles/padding.module.scss"
import { capitalizeWord, joinFilter } from "@utils/helpers"
import { paddingOptions, desktopOptions, mobileOptions } from "@type/options"

interface iProps {
  className?: string
  align?: string
}

type Props = iProps & paddingOptions & desktopOptions & mobileOptions

const Column: React.FunctionComponent<Props> = ({
  children,
  desktop,
  mobile,
  className,
  align,
  padding,
  ...props
}) => {
  const styleOptions = [
    styles.container,
    className ? className : "",
    desktop ? styles[`desktop${capitalizeWord(desktop)}`] : "",
    mobile ? styles[`mobile${capitalizeWord(mobile)}`] : "",
    padding ? paddingStyles[padding] : "",
    align ? styles[`align${capitalizeWord(align)}`] : "",
  ]

  return (
    <div {...props} className={joinFilter(styleOptions)}>
      {children}
    </div>
  )
}

export default Column
