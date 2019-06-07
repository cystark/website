interface HashMapOfUrls {
  [key: string]: string
}

const socialUrl: HashMapOfUrls = {
  github: "https://github.com/",
  twitter: "https://twitter.com/",
  email: "mailto:",
  linkedin: "https://www.linkedin.com/in/",
}

const generateSocialLink = (key: string, value: string) => {
  const _url = key in socialUrl ? socialUrl[key] : ""
  const info = value.replace(/^@/, "")
  return `${_url}${info}`
}

const socialLinks = (dataObject: object) => {
  return Object.entries(dataObject)
    .map(([key, value]) => ({
      name: key,
      info: value,
      link: generateSocialLink(key, value),
    }))
    .reduce(
      (acc, cur) => ({
        ...acc,
        [cur.name]: { info: cur.info, link: cur.link },
      }),
      {}
    )
}

export default socialLinks
