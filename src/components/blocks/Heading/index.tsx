import React from "react"
import Block from '../Block'
import styles from './styles.module.css'

interface Props  {
  title: string,
  style: string,
  padding: string,
  html: string
}

const HeadingBlock: React.FunctionComponent<Props> = (props) => {

  const style = props.style ? 
    `${styles.container} ${styles[props.style]}` : 
    styles.container;

  const data = {...props, style}

  return (
    <Block {...data} htmlPadding={true} />
  )
}

export default HeadingBlock
