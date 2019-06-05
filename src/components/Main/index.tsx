import { StaticQuery, graphql } from "gatsby"
import React from "react"
import Block from "../Block"
import styles from "./styles.module.scss"

interface SectionProps {
  node: {
    html: string
    frontmatter: {
      title: string
      textAlign: string
      container: string
      columns: string
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
      render={data =>
        data.allMarkdownRemark.edges.map((section: SectionProps) => {
          const { html } = section.node
          const {
            title,
            columns,
            container,
            padding,
            theme,
            textAlign,
            type,
          } = section.node.frontmatter
          key = key + 1
          return (
            <div className={styles.section} key={key}>
              <Block
                container={container}
                type={type}
                theme={theme}
                title={title}
                textAlign={textAlign}
                padding={padding}
                columns={columns}
                html={html}
              />
            </div>
          )
        })
      }
    />
  )
}

export default Main

const homepageData = graphql`
  query {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___module] }
      filter: { frontmatter: { path: { eq: "/" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            textAlign
            columns
            container
            padding
            theme
            type
          }
          html
        }
      }
    }
  }
`
