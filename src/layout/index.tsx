import { StaticQuery, graphql } from "gatsby"
import React from "react"
import styles from "./styles.module.scss"

import Header from "../components/Header"
import Hero from "../components/Hero"
import Contact from "../components/Contact"
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
            <Header
              menuLinks={siteMeta.menuLinks ? siteMeta.menuLinks : []}
              siteTitle={siteMeta.title}
            />
            <Hero
              location={location}
              title={siteMeta.title}
              description={siteMeta.description}
              path={location.pathname}
            />
            {children}
            <Contact />
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
          link
          name
        }
      }
    }
  }
`
export default HomePage
