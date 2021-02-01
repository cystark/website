import React from "react"
import styles from "./styles.module.scss"
import textStyle from "@styles/text.module.scss"
import { textAlignOptions } from "@type/options"
import { joinFilter, capitalizeWord } from "@utils/helpers"
import Title from "@components/Title"
import ContainerWrap from "@components/ContainerWrap"

interface Props {
  className?: string
  title?: string
  backgroundColor?: string
}

const TextHero: React.SFC<Props> = ({
  className,
  title,
  backgroundColor,
  ...props
}) => {
  const styleOptions = [
    className ? className : "",
    backgroundColor ? styles[`theme${capitalizeWord(backgroundColor)}`] : "",
  ]

  return (
    <div className={joinFilter(styleOptions)}>
      <ContainerWrap container="small">
        {title && <Title bottomPadding={"none"}>{title}</Title>}
      </ContainerWrap>
    </div>
  )
}

export default TextHero
