import React from "react"
import styles from "./styles.module.scss"
import { capitalizeWord, joinFilter } from "../../utils/helpers"

interface Props {
  className: string
}

const Column: React.FunctionComponent<Props> = ({ children, className }) => {
  const styleOptions = [styles.container, className]

  return <div className={joinFilter(styleOptions)}>{children}</div>
}

export default Column
