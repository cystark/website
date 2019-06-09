import React from "react"
import styles from "./styles.module.scss"
import { illustration as illustrationAnimation } from "../../animations/timelines"
import withImageWrap from "../withImageWrap"

import Illustration from "../Illustration"
import LogoHero from "../LogoHero"
import ContainerWrap from "../ContainerWrap"
import Columns from "../Columns"
import Column from "../Column"
import Title from "../Title"
import Center from "../Center"
import ToggleModal from "../ToggleModal"
import HighlightPoint from "../HighlightPoint"
import SiteData from "../../context/SiteData"
import { connect } from "react-redux"
import { capitalizeWord, getToday } from "../../utils/helpers"

//SVG
import { Now as NowSVG } from "../../inline-icons"

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
    const { subheading } = this.props
    return (
      <div className={styles.illustrationBackground}>
        <ContainerWrap container="large" padding="none">
          <Columns>
            <Column theme="primary">
              <Center type="vertical">
                <div className={styles.containerLogo}>
                  <SiteData.Consumer>
                    {({ description, location }) =>
                      location.pathname == "/" ? (
                        <>
                          <LogoHeroWithImageWrap
                            ratio={285 / 500}
                            ref={this.logoRef}
                          />
                          <hr />
                          <p>{description}</p>

                          <HighlightPoint>
                            {getToday()}
                            <ToggleModal>
                              Currently looking for job Oppotunities
                            </ToggleModal>{" "}
                            .
                          </HighlightPoint>
                        </>
                      ) : (
                        <>
                          <Title size="huge">
                            {capitalizeWord(
                              location.pathname.replace(/\//i, "")
                            )}
                          </Title>
                          <hr />
                          {subheading}
                        </>
                      )
                    }
                  </SiteData.Consumer>
                </div>
              </Center>
            </Column>
            <Column desktop="oneThird">
              <div className={styles.containerIllustrationWrap}>
                <div className={styles.containerIllustration}>
                  <Center type="center">
                    <IllustrationWithImageWrap
                      ratio={542 / 600}
                      ref={this.illustrationRef}
                    />
                  </Center>
                </div>
              </div>
            </Column>
          </Columns>
        </ContainerWrap>
      </div>
    )
  }
}

export default Hero
