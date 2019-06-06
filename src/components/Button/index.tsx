import React from "react"
import styles from "./styles.module.scss"
import { joinFilter, capitalizeWord } from "../../utils/helpers"

interface Props {
  className: string
  type: "submit" | "reset" | "button"
  size: string
  theme: string
  style: object
  onClick: any
}

const Button: React.FunctionComponent<Props> = ({
  children,
  size = "normal",
  type = "button",
  theme = "primary",
  className,
  style,
  onClick,
}) => {
  const styleOptions = [
    className,
    styles.button,
    size ? styles[`size${capitalizeWord(size)}`] : "",
    theme ? styles[`theme${capitalizeWord(theme)}`] : "",
  ]

  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={joinFilter(styleOptions)}
        style={style}
      >
        {children}
      </button>
    </>
  )
}

export default Button
