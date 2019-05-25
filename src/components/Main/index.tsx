import { StaticQuery, graphql } from "gatsby"
import React from "react"
import styles from "./styles.module.css"
import ScrollContainer from "../ScrollContainer"
import Block from "../Block"

interface SectionProps {
  node: {
    html: string
    frontmatter: {
      title: string
      container: string
      padding: string
      type: string
      theme: string
    }
  }
}

const Main: React.StatelessComponent = () => {
  let key = 0
  return (
    <StaticQuery
      query={homepageData}
      render={data => (
        <ScrollContainer>
          {data.allMarkdownRemark.edges.map((section: SectionProps) => {
            const { html } = section.node
            const { title, padding, type, theme, container } = section.node.frontmatter
            key = key + 1
            return (
              <div className={styles.section} key={key}>
                <Block
                  container={container}
                  type={type}
                  theme={theme}
                  title={title}
                  padding={padding}
                  html={html}
                />
              </div>
            )
          })}
        </ScrollContainer>
      )}
    />
  )
}

export default Main

const homepageData = graphql`
  query {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___module] }
      filter: { frontmatter: { page: { eq: "homepage" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            padding
            container
            type
            theme
          }
          html
        }
      }
    }
  }
`
