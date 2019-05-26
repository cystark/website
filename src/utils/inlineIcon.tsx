import React from "react"
import { Github, LinkedIn } from "../assets/inline-icons"

const inlineIcon = (name: string) => {
  if (name == "github") {
    return <Github />
  } else if (name == "linkedin") {
    return <LinkedIn />
  }
}

export default inlineIcon
