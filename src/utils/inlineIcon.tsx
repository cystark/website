import React from "react"
import { Logo, Github, LinkedIn } from "../inline-icons"

const inlineIcon = (name: string) => {
  if (name == "logo") {
    return <Logo />
  } else if (name == "github") {
    return <Github />
  } else if (name == "linkedin") {
    return <LinkedIn />
  }
}

export default inlineIcon
