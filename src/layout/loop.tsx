import React from "react"
import styles from "./styles.module.css"
import TextBlock from "../blocks/Text"
import ListBlock from "../blocks/List"
import HeadingBlock from "../blocks/Heading"
import ScrollContainer from "../components/ScrollContainer"
import Footer from "../components/Footer"

interface DataProps {
  data: {
    allMarkdownRemark: { edges: Array<any> }
  }
}

interface SectionProps {
  node: {
    html: string
    frontmatter: {
      title: string
      style: string
      padding: string
      type: string
    }
  }
}

const Loop: React.FunctionComponent<DataProps> = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  let key = 0

  return (
    <ScrollContainer>
      {edges.map((section: SectionProps) => {
        const { html } = section.node
        const { title, padding, type, style } = section.node.frontmatter
        key = key + 1
        switch (type) {
          case "heading":
            return (
              <HeadingBlock
                key={key}
                style={style}
                title={title}
                padding={padding}
                html={html}
              />
            )
          case "text":
            return (
              <TextBlock
                key={key}
                style={style}
                title={title}
                padding={padding}
                html={html}
              />
            )
          case "list":
            return (
              <ListBlock
                key={key}
                style={style}
                title={title}
                padding={padding}
                html={html}
              />
            )
        }
      })}
      <Footer />
    </ScrollContainer>
  )
}

export default Loop
