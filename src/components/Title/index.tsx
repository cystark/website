import React from "react"
import styles from "./styles.module.scss"
import textStyle from "@styles/text.module.scss"
import { textAlignOptions } from "@type/options"
import { joinFilter, capitalizeWord } from "@utils/helpers"

interface Props {
  className?: string
  bottomPadding?: string
  size?: string
  withIcon?: boolean
  children: any
}

export const TitleWithIcon: React.SFC = ({ children }) => (
  <Title bottomPadding="medium" withIcon={true}>
    {children}
  </Title>
)

const Title: React.SFC<Props & textAlignOptions> = ({
  children,
  className,
  size = "normal",
  textAlign = "left",
  withIcon = false,
  bottomPadding = "normal",
  ...props
}) => {
  const styleOptions = [
    className ? className : "",
    styles.title,
    withIcon ? styles.withIcon : "",
    bottomPadding
      ? styles[`bottomPadding${capitalizeWord(bottomPadding)}`]
      : "",
    size ? styles[`size${capitalizeWord(size)}`] : "",
    textStyle ? textStyle[textAlign] : "",
  ]

  return (
    <h3 {...props} className={joinFilter(styleOptions)}>
      {children}
    </h3>
  )
}

export default Title
