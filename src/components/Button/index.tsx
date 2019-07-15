import React from "react"
import styles from "./styles.module.scss"
import { joinFilter, capitalizeWord } from "@utils/helpers"

type ButtonProps = {
  className?: string
  size?: string
  theme?: string
  href?: string
  target?: string
  type?: "submit" | "button" | "reset" | undefined
}

const Button: React.FunctionComponent<ButtonProps> = ({
  className,
  size = "medium",
  theme = "ghost",
  href = null,
  target = "_blank",
  children,
  ...props
}) => {
  const styleOptions = [
    className ? className : "",
    styles.button,
    size ? styles[`size${capitalizeWord(size)}`] : "",
    theme ? styles[`theme${capitalizeWord(theme)}`] : "",
  ]

  if (href) {
    return (
      <a
        {...props}
        href={href}
        target={target}
        className={joinFilter(styleOptions)}
      >
        {children}
      </a>
    )
  }

  return (
    <button {...props} className={joinFilter(styleOptions)}>
      {children}
    </button>
  )
}

export default Button
