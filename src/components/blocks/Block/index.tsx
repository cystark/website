import React from "react"
import Title from '../../parts/Title'
import VerticalPadding from '../../structure/VerticalPadding'
import ContainerWrap from '../../structure/ContainerWrap'
import styles from './styles.module.css'

interface Props  {
  title: string,
  padding: string,
  style: string,
  html: string,
  content?: any,
  htmlPadding: boolean,
}

const Block: React.FunctionComponent<Props> = ({ title, style, padding, html, content, htmlPadding }) => {

  const htmlStyling = htmlPadding ? styles.horizontalPadding : styles.container

  const blockStyle = style ? 
    `${styles.container} ${style}` : 
    styles.container;

  return (
    <div className={blockStyle}>
      <VerticalPadding padding={padding}>
        <ContainerWrap>
          <Title>{title}</Title>
          <div className={htmlStyling}>
            {content ? content() : (
              <div dangerouslySetInnerHTML={{__html: html }}></div>
            )}
          </div>
        </ContainerWrap>
      </VerticalPadding>
    </div>
  )
}

export default Block
