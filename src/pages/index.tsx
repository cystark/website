import * as React from "react"
import Layout from "../layout/"
import withImageWrap from "../components/withImageWrap"

//SVG
import {
  Logo as LogoSVG,
  Bronson as BronsonSVG,
  Now as NowSVG,
} from "../inline-icons"

import Linktree from "../images/linktree.svg"
import Bolster from "../images/bolster.svg"
import TwentyFour from "../images/twentyfour.svg"

import Columns from "../components/Columns"
import Column from "../components/Column"
import Title from "../components/Title"
import Card from "../components/Card"

import ContainerWrap from "../components/ContainerWrap"

interface Props {
  location: any
}

const IndexPage: React.StatelessComponent<Props> = ({ location }) => (
  <Layout location={location}>
    <ContainerWrap container="wide" padding="large">
      <Columns>
        <Column desktop="twoFifths" align="offsetLeft">
          <Columns direction="column">
            <Column>
              <Title>
                <LogoSVG />
                Hello Welcome
              </Title>
              <hr />
              <p>
                This is my portfolio / lab of ideas, ponders & personal
                projects. I am a Web Developer with interest in React, Frontend,
                Automation, Animation and Analytcs.
              </p>
              <p>
                I live with my partner Kelly and have my trusty pooch companion
                Bronson (named after the rapper / chef extraordinaire 'Action
                Bronson').
              </p>
              <p>
                My other passions include: Animation, Games, Agile, GTD, Music,
                Cooking.
              </p>
            </Column>
            <Column>
              <Title>
                <NowSVG />
                Now
              </Title>
              <hr />
              <p>
                Currently renovating my town house with Kelly, from ripping out
                the dry walls to putting in new floors. Stepping into unfamiliar
                territory but enjoying the many lessons along the way.
              </p>
              <p>
                I am looking for some projects at the moment, so if you are
                interested in collaborating please email me{" "}
                <a href="mailto:cam@cystark.com.au">here</a>.
              </p>
            </Column>
          </Columns>
        </Column>
        <Column desktop="twoFifths">
          <Columns>
            <Column>
              <Title>
                <BronsonSVG />
                Projects I am Working on
              </Title>
              <hr />
              <Columns direction="column">
                <Column>
                  <Card>
                    <h4>Blog</h4>
                    <p>Coming Soon!</p>
                  </Card>
                </Column>
                <Column dekstop="half">
                  <Card>
                    <h4>Code Typist</h4>
                    <p>
                      I love typing tests, and have it as my morning ritual. I
                      am yet to find something for coders in a way that I want.
                      So much so I am creating a game for the Mac.
                    </p>
                  </Card>
                </Column>
                <Column>
                  <Card>
                    <h4>Horizons</h4>
                    <p>
                      One of my big passions is GTD (Getting Things Done). My
                      Todoist and Notion personal management stack is the bees
                      knees, but I am in search for a better way to keep my
                      Horizons in check.
                    </p>
                  </Card>
                </Column>
              </Columns>
            </Column>
          </Columns>
        </Column>
      </Columns>
    </ContainerWrap>
  </Layout>
)

export default IndexPage
