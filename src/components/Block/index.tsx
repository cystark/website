import React from "react"
import Title from "../Title"
import VerticalPadding from "../VerticalPadding"
import ContainerWrap from "../ContainerWrap"

import styles from "./styles.module.css"
import tableStyle from "./table.module.css"
import headingStyle from "./heading.module.css"
import listStyle from "./list.module.css"

interface Props {
  type: string
  title: string
  theme: string
  padding: string
  container: string
  html: string
}

const Block: React.FunctionComponent<Props> = ({
  type,
  title,
  theme,
  padding,
  container,
  html,
}) => {
  let blockStyle = styles.container
  let blockContent = ""

  switch (type) {
    case "heading":
      blockStyle = `${blockStyle} ${headingStyle.container}`
      blockContent = headingStyle.content
      break
    case "table":
      blockStyle = `${blockStyle} ${tableStyle.container}`
      blockContent = tableStyle.content
      break
    case "list":
      blockStyle = `${blockStyle} ${listStyle.container}`
      blockContent = listStyle.content
      break
    default:
      blockStyle = `${blockStyle}`
  }

  //Addition of theme
  blockStyle = `${blockStyle} ${styles[theme]}`

  return (
    <div className={blockStyle}>
      <VerticalPadding padding={padding}>
        <ContainerWrap container="wide">
          <Title>{title}</Title>
        </ContainerWrap>
        <ContainerWrap className={blockContent} container={container}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </ContainerWrap>
      </VerticalPadding>
    </div>
  )
}

export default Block
