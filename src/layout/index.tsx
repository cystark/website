import { StaticQuery, graphql } from "gatsby"
import React from "react"
import styles from "./styles.module.scss"

import Header from "../components/Header"
import Hero from "../components/Hero"
import Contact from "../components/Contact"
import Modal from "../components/Modal"
import NetlifyForm from "../components/NetlifyForm"

import socialLinks from "../utils/socialLinks"
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
        const { linkedin, github, twitter, email, ...rest } = siteMetadata
        const siteContext = {
          ...rest,
          socialLinks: socialLinks({ linkedin, github, email }),
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
            <Modal>
              <NetlifyForm />
            </Modal>
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
        email
        copyright
        github
        linkedin
        menuLinks {
          name
          link
        }
      }
    }
  }
`
export default HomePage
