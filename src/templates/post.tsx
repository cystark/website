import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import ContainerWrap from "@components/ContainerWrap"
import Layout from "../layout/"
import TextHero from "@components/TextHero"

export default function Post({ data: { mdx }, pageContext: { next, prev } }) {
  return (
    <Layout location={location}>
      <TextHero title={mdx.frontmatter.title} backgroundColor={"primary"} />

      <ContainerWrap container="small">
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </ContainerWrap>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
        banner
        slug
        keywords
      }
      body
    }
  }
`
