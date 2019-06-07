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
import SiteData from "../../context/SiteData"
import { connect } from "react-redux"
import { toggleModal } from "../../state/actions"
import { getToday } from "../../utils/helpers"

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
    const { dispatch, openModal } = this.props
    return (
      <SiteData.Consumer>
        {({ description, location, socialLinks: { email } }) => (
          <div className={styles.illustrationBackground}>
            <ContainerWrap container="large" padding="none">
              <Columns>
                <Column theme="primary">
                  {location.pathname == "/" && (
                    <Center type="vertical">
                      <div className={styles.containerLogo}>
                        <LogoHeroWithImageWrap
                          ratio={285 / 500}
                          ref={this.logoRef}
                        />
                        <hr />
                        <p>{description}</p>
                        <CTA>
                          {getToday()}. Currently looking for job oppotunities.
                          Contact me{" "}
                          <a
                            href={email.link}
                            onClick={event => {
                              event.preventDefault()
                              dispatch(toggleModal(!openModal))
                            }}
                          >
                            here
                          </a>{" "}
                          .
                        </CTA>
                      </div>
                    </Center>
                  )}
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
        )}
      </SiteData.Consumer>
    )
  }
}

export default connect(
  ({ openModal }) => ({ openModal }),
  null
)(Hero)
