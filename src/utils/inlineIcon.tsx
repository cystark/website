import React from "react"
import { Logo, Github, LinkedIn, Email } from "../inline-icons"

const inlineIcon = (name: string) => {
  if (name == "logo") {
    return <Logo />
  } else if (name == "github") {
    return <Github />
  } else if (name == "linkedin") {
    return <LinkedIn />
  } else if (name == "email") {
    return <Email />
  } else {
    return ""
  }
}

export default inlineIcon
