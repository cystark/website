import React from "react"
import styles from './styles.module.css'

interface Props  {
  theme: string
}

const BlockPadding: React.FunctionComponent<Props> = ({theme,children}) => {
  return (
    <div className={styles[theme]}>
        {children}
    </div>
  )
}

export default BlockPadding

