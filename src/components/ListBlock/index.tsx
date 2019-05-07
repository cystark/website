import React from "react"
import styles from './styles.module.css'
import Title from '../Title'
import BlockPadding from '../BlockPadding'

interface Props  {
  title: string,
  theme: string,
  html: string
}

const TextBlock: React.FunctionComponent<Props> = ({ title, theme, html }) => {

  return (
    <div className={styles.container}>
      <BlockPadding theme={theme}>
        <Title>{title}</Title>
        <div dangerouslySetInnerHTML={{__html: html }}></div>
      </BlockPadding>
    </div>
  )
}

export default TextBlock
