import React from "react"
import styles from "./styles.module.css"

interface Props {
  container?: string
  className?: string
  children?: any
}

const ContainerWrap: React.FunctionComponent<Props> = ({
  container,
  className,
  children,
}) => {
  const containerOption = container || "container"
  return (
    <div className={`${className} ${styles[containerOption]}`}>{children}</div>
  )
}

export default ContainerWrap
