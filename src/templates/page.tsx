import React from "react"
import { graphql } from "gatsby"
import Block from "../components/Block"
import Layout from "../layout/"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  location,
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const {
    title,
    columns,
    container,
    padding,
    theme,
    textAlign,
    type,
  } = frontmatter
  return (
    <Layout location={location}>
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
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        textAlign
        columns
        container
        padding
        theme
        type
      }
    }
  }
`
