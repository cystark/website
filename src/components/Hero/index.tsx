import React from "react"
import styles from "./styles.module.scss"
import illustrationInitAnimation from "@animations/init"
import illustrationDogAnimation from "@animations/dog"
import illustrationFingersAnimation from "@animations/fingers"
import withImageWrap from "../withImageWrap"

import Illustration from "@components/Illustration"
import LogoHero from "@components/LogoHero"
import ContainerWrap from "@components/ContainerWrap"
import Columns from "@components/Columns"
import Column from "@components/Column"
import Title from "@components/Title"
import Center from "@components/Center"
import ToggleModal from "@components/ToggleModal"
import HighlightPoint from "@components/HighlightPoint"
import SiteData from "@context/SiteData"
import { siteInit } from "@state/actions"
import { AppState, AppActions, ConnectedReduxProps } from "@state/types"
import { connect } from "react-redux"
import { capitalizeWord, getToday, isMobile } from "@utils/helpers"

const IllustrationWithImageWrap = withImageWrap(Illustration)
const LogoHeroWithImageWrap = withImageWrap(LogoHero)

interface Props extends ConnectedReduxProps<AppActions> {
  path?: string
  subheading?: string
  children?: any
}

type SVGProps = { svgRef: React.RefObject<any> }

type AllProps = Props & AppState

export class Hero extends React.Component<AllProps> {
  illustrationRef: React.RefObject<any>
  logoRef: React.RefObject<any>

  constructor(props: any) {
    super(props)
    this.illustrationRef = React.createRef()
    this.logoRef = React.createRef()
  }

  async componentDidMount() {
    const svgRef = this.illustrationRef.current
    //Only strat once at when site inits
    if (!this.props.siteInit && svgRef) {
      await illustrationInitAnimation(svgRef.svgRef.current)
      if (isMobile()) {
        await Promise.all([
          illustrationDogAnimation(svgRef.svgRef.current),
          illustrationFingersAnimation(svgRef.svgRef.current),
        ])
      }
      if (this.props.dispatch) {
        await this.props.dispatch(siteInit(true))
      }
    }
  }

  render() {
    const { subheading } = this.props
    return (
      <div className={styles.illustrationBackground}>
        <ContainerWrap container="large" padding="none">
          <Columns>
            <Column className={styles.primaryBackground}>
              <Center type="vertical">
                <div className={styles.containerLogoWrap}>
                  <SiteData.Consumer>
                    {({ description, location }) =>
                      location && location.pathname == "/" ? (
                        <>
                          <div className={styles.containerLogo}>
                            <LogoHeroWithImageWrap
                              ratio={285 / 500}
                              ref={this.logoRef}
                            />
                          </div>
                          <p>{description}</p>
                          <hr />
                          <HighlightPoint>
                            <span>{getToday()}</span>
                            <ToggleModal>
                              Currently looking for job oppotunities
                            </ToggleModal>
                          </HighlightPoint>
                        </>
                      ) : (
                        <>
                          <Title size="huge">
                            {location &&
                              capitalizeWord(
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
                  <Center type="vertical">
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

const mapStateToProps = (state: AppState) => ({
  siteInit: state.siteInit,
})

const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hero)
