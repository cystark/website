import React from "react"

interface SocialLink {
  name: string
  info: string
  link: string
}

export interface SocialLinks {
  [key: string]: SocialLink
}

export type Location = {
  pathname: string
  host: string
  hostname: string
  href: string
  origin: string
  port: string
}

export type socials = {
  linkedin: string
  twitter: string
  github: string
  email: string
}

export interface SiteDataContextInterface extends socials {
  title: string
  description: string
  copyright: string
  location: Location
  menuLinks: Array<object>
  socialLinks: SocialLinks
  banner: string
  titleAlt: string
  shortName: string
  author: string
  siteLanguage: string
  logo: string
  siteURL: string
  pathPrefix: string
}

export interface SiteDataContextInterfaceRaw {
  site: {
    siteMetadata: SiteDataContextInterface
  }
}

export const MockLocation: Location = {
  host: "localhost",
  pathname: "/",
  hostname: "localhost",
  href: "https://site.com",
  origin: "/",
  port: "8000",
}

export const MockSocialLinks: SocialLinks = {
  email: { name: "", info: "", link: "cam@cystark.com.au" },
  twitter: { name: "", info: "", link: "http://twitter.com/sample" },
  github: { name: "", info: "", link: "http://github.com/sample" },
  linkedin: { name: "", info: "", link: "http://linkdein.com/sample" },
}

export const MockSiteData: SiteDataContextInterface = {
  title: "Title of Site",
  description: "Description of Site",
  copyright: "Copyright 2019",
  location: MockLocation,
  menuLinks: [{}],
  banner: "Welcome to the site",
  titleAlt: "Alternative Title",
  shortName: "cystark",
  author: "cystark",
  siteLanguage: "en",
  logo: "/images/logo.svg",
  siteURL: "https://site.com",
  pathPrefix: "https",
  linkedin: "http://linkdein.com/sample",
  twitter: "http://twitter.com/sample",
  github: "http://github.com/sample",
  email: "cam@cystark.com.au",
  socialLinks: MockSocialLinks,
}

export const MockSiteDataRaw: SiteDataContextInterfaceRaw = {
  site: {
    siteMetadata: MockSiteData,
  },
}

const SiteData = React.createContext<Partial<SiteDataContextInterface>>({})

export default SiteData
