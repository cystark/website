import React from "react"
import styles from "./styles.module.scss"
import { joinFilter } from "@utils/helpers"

type Props = { className?: string }

const CTA: React.SFC<Props> = ({ className, children, ...props }) => {
  const styleOptions = [styles.cta, className ? className : ""]
  return (
    <div {...props} className={joinFilter(styleOptions)}>
      {children}
    </div>
  )
}

export default CTA
