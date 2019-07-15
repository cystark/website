import React, { Component } from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import SiteData from "@context/SiteData"

interface Props {
  title?: string
}

const SEO: React.SFC<Props> = ({ title }) => (
  <SiteData.Consumer>
    {({
      title: defaultTitle,
      banner,
      description,
      titleAlt,
      shortName,
      author,
      siteLanguage,
      logo,
      siteURL,
      pathPrefix,
      twitter,
      //Cannot write location : {pathname}
      //Typescript errors with does not exist on type when it is clearly there
      //in the type
      location,
    }) => {
      const data = {
        title: title || defaultTitle,
        description: description,
        image: `${siteURL}${banner}`,
        url: `${location ? siteURL + location.pathname : "/"}`,
      }
      const realPrefix = pathPrefix === "/" ? "" : pathPrefix
      let schemaOrgJSONLD = [
        {
          "@context": "http://schema.org",
          "@type": "WebSite",
          "@id": siteURL,
          url: siteURL,
          name: title,
          alternateName: titleAlt || "",
        },
      ]

      return (
        <>
          <Helmet title={title}>
            <html lang={siteLanguage} />
            <meta name="description" content={description} />
            <meta name="image" content={logo} />
            <meta name="apple-mobile-web-app-title" content={shortName} />
            <meta name="application-name" content={shortName} />
            <script type="application/ld+json">
              {JSON.stringify(schemaOrgJSONLD)}
            </script>

            {/* OpenGraph  */}
            <meta property="og:url" content={siteURL} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={logo} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitter} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={logo} />
          </Helmet>
        </>
      )
    }}
  </SiteData.Consumer>
)

export default SEO
