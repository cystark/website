import { StaticQuery, graphql } from 'gatsby';
import React from "react"
import styles from './styles.module.css'

import LogoHero from "../parts/LogoHero"
import Illustration from '../parts/Illustration'

import Loop from './loop'

const Layout = () => (
  <StaticQuery query={homepageData} render={data => (
    <div className={styles.container}>
      <div className={styles.scrollBlock}>
        <div className={styles.hero}>
          <LogoHero />
          <Illustration />
        </div>
        <Loop data={data} />
      </div>
      <div className={styles.imageBlock}>
      </div>
    </div>
  ) }
  />
)

const homepageData = graphql`
  query {
    allMarkdownRemark(sort: {order: ASC, fields: [frontmatter___module]},
    filter: {frontmatter: { page: { eq: "homepage" } }}) {
      edges {
        node {
          frontmatter {
            title,
            style,
            padding,
            type
          },
          html
        }
      }
    }
  }
`

export default Layout
