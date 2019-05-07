import React from "react"
import styles from './styles.module.css'

interface Props  {
  children: string
}

const TextBlock: React.FunctionComponent<Props> = ({children}) => {

  return (
    <h3 className={styles.title}>{children}</h3>
  )
}

export default TextBlock
