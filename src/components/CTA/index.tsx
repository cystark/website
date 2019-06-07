import React from "react"
import styles from "./styles.module.scss"
import { joinFilter } from "../../utils/helpers"

interface Props {
  className: string
}

const CTA: React.FunctionComponent<Props> = ({ children, className }) => {
  const styleOptions = [styles.cta, className]

  return <div className={joinFilter(styleOptions)}>{children}</div>
}

export default CTA
