import React from "react"
import styles from "./styles.module.scss"
import { illustration as illustrationAnimation } from "../../animations/timelines"
import withImageWrap from "../withImageWrap"

import Illustration from "../Illustration"
import LogoHero from "../LogoHero"
import ContainerWrap from "../ContainerWrap"
import Columns from "../Columns"
import Column from "../Column"
import Center from "../Center"
import CTA from "../CTA"

const highlights = [
  {
    name: "Something",
    src: "bronson.svg",
    link: "google.com",
    text: "something here",
  },
  {
    name: "Sooomething",
    src: "bronson.svg",
    link: "google.com",
    text: "sooomething is here my maaaang",
  },
]

interface Props {
  description: string
  path?: string
}

const IllustrationWithImageWrap = withImageWrap(Illustration)
const LogoHeroWithImageWrap = withImageWrap(LogoHero)

class Hero extends React.Component {
  constructor(props) {
    super(props)
    this.illustrationRef = React.createRef()
    this.logoRef = React.createRef()
  }

  componentDidMount() {
    const { svgRef } = this.illustrationRef.current
    illustrationAnimation(svgRef.current)
  }

  render() {
    const { path, description } = this.props
    return (
      <ContainerWrap>
        <Columns>
          <Column align="offsetLeft">
            {path == "/" && (
              <Center type="vertical">
                <div className={styles.containerLogo}>
                  <LogoHeroWithImageWrap ratio={285 / 500} ref={this.logoRef} />
                  <hr />
                  <p>{description}</p>
                  <CTA>
                    June 1. Currently looking for job oppotunities. Contact me
                    through Linkedin or Email
                  </CTA>
                </div>
              </Center>
            )}
          </Column>
          <Column desktop="oneThird" theme="wheat">
            <div className={styles.containerIllustrationWrap}>
              <div className={styles.containerIllustration}>
                <IllustrationWithImageWrap
                  ratio={542 / 600}
                  ref={this.illustrationRef}
                />
              </div>
            </div>
          </Column>
        </Columns>
      </ContainerWrap>
    )
  }
}

export default Hero
