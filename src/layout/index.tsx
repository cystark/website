import { StaticQuery, graphql } from "gatsby"
import React from "react"
import styles from "./styles.module.scss"

import Header from "../components/Header"
import Hero from "../components/Hero"
import Contact from "../components/Contact"
import socialLinks from "../../config/socials"
import Footer from "../components/Footer"
import SiteData from "../context/SiteData"

interface Props {
  location: any
}

const HomePage: React.StatelessComponent<Props> = ({ location, children }) => {
  return (
    <StaticQuery
      query={homepageData}
      render={data => {
        const siteMetadata = data.site.siteMetadata
        const siteContext = {
          title: siteMetadata.title,
          description: siteMetadata.description,
          menuLinks: siteMetadata.menuLinks ? siteMetadata.menuLinks : [],
          socialLinks,
          location,
        }
        return (
          <div className={styles.container}>
            <SiteData.Provider value={siteContext}>
              <Header />
              <Hero />
              {children}
              <Contact />
              <Footer />
            </SiteData.Provider>
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
