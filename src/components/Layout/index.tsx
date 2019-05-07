import { StaticQuery, graphql } from 'gatsby';
import React from "react"
import styles from './styles.module.css'

import Loop from '../Loop'
import LogoHero from "../LogoHero"
import Illustration from '../Illustration'

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
            type,
            style,
            align
          },
          html
        }
      }
    }
  }
`

export default Layout
