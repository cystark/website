import React from "react"
import styles from './styles.module.css'
import TextBlock from '../TextBlock'
import ListBlock from '../ListBlock'
import HeadingBlock from '../HeadingBlock'
import Footer from '../Footer'

interface DataProps  {
  data: {
    allMarkdownRemark: {edges:Array<any>},
  }
}

interface SectionProps {
  node: {
    html: string,
    frontmatter: {
      title: string,
      style: string,
      align: string
    }
  }
}

const Loop: React.FunctionComponent<DataProps> = ({data}) => {
  const defaultStyle = 'bodyDark';
  const { edges } = data.allMarkdownRemark
  let key = 0;

  return (
    <div className={styles.containerScroll}>
    { edges.map((section:SectionProps) => {
      const { html } = section.node
      const { title, type, style, align } = section.node.frontmatter
      key = key + 1
      switch(type) {
        case 'heading' :
          return (
            <HeadingBlock key={key}
            theme={style ? style : defaultStyle }
            title={title}
            align={align}
            html={html}
            />
          )
        case 'text' :
          return (
            <TextBlock key={key}
            theme={style ? style : defaultStyle }
            title={title}
            align={align}
            html={html}
            />
          )
        case 'list' :
          return (
            <ListBlock key={key}
            theme={style ? style : defaultStyle }
            title={title}
            align={align}
            html={html}
            />
          )
      }}
    )}
    <Footer />
    </div>
  )
}

export default Loop
