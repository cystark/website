import { StaticQuery, graphql } from "gatsby"
import React from "react"
import styles from "./styles.module.css"

import Header from "../components/Header"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

interface Props {
  location: any
}

const HomePage: React.StatelessComponent<Props> = ({ location, children }) => {
  return (
    <StaticQuery
      query={homepageData}
      render={data => {
        const siteMeta = data.site.siteMetadata
        return (
          <div className={styles.container}>
            <Header menuLinks={siteMeta.menuLinks} siteTitle={siteMeta.title} />
            <SEO />
            {location.pathname == "/" && (
              <Hero description={siteMeta.description} />
            )}
            {children}
            <Footer />
          </div>
        )
      }}
    />
  )
}

const homepageData = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        menuLinks {
          name
          link
        }
      }
    }
  }
`
export default HomePage
