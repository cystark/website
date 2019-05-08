import React from "react"
import styles from './styles.module.css'

interface Props  {
  children?: any
}

const ContainerWrap: React.FunctionComponent<Props> = ({children}) => {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}

export default ContainerWrap

