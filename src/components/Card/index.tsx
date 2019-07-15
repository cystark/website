import React from "react"
import styles from "./styles.module.scss"
import { joinFilter } from "../../utils/helpers"

import Button from "../Button"

interface Props {
  title: string
  className?: string
  link?: string
  label?: string
}

const Column: React.FunctionComponent<Props> = ({
  title,
  link,
  label,
  children,
  className,
}) => {
  const styleOptions = [styles.container, className ? className : ""]

  return (
    <div className={joinFilter(styleOptions)}>
      <h4 className={styles.title}>{title}</h4>
      {children}
      {link && (
        <div className={styles.more}>
          <Button size="small" theme="ghost" href={link} target="_blank">
            Link
          </Button>
        </div>
      )}
      {label && (
        <div className={styles.more}>
          <span className={styles.label}>{label}</span>
        </div>
      )}
    </div>
  )
}

export default Column
