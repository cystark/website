import React from "react"
import Title from "../Title"
import VerticalPadding from "../VerticalPadding"
import ContainerWrap from "../ContainerWrap"

import styles from "./styles.module.scss"
import tableStyle from "./table.module.scss"
import headingStyle from "./heading.module.scss"
import listStyle from "./list.module.scss"
import columnsStyle from "./columns.module.scss"

interface Props {
  type?: string
  title?: string
  textAlign?: string
  theme?: string
  padding?: string
  container?: string
  columns?: string
  html?: string
}

const Block: React.FunctionComponent<Props> = ({
  type,
  title,
  textAlign = "left",
  theme = "primary",
  padding,
  container = "small",
  columns = "",
  html,
  children,
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
      blockStyle = blockStyle
  }

  //Addition of theme
  blockStyle = `${blockStyle} ${styles[theme]}`

  //Addition of columns
  blockContent = `${blockContent} ${columnsStyle[columns]}`

  return (
    <div className={blockStyle}>
      <VerticalPadding padding={padding}>
        <ContainerWrap className={blockContent}>
          {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : children}
        </ContainerWrap>
      </VerticalPadding>
    </div>
  )
}

export default Block
