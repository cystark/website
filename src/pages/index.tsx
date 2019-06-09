import * as React from "react"
import Layout from "../layout/"

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
import Hero from "../components/Hero"
import SEO from "../components/SEO"

import ContainerWrap from "../components/ContainerWrap"

interface Props {
  location: any
}

const IndexPage: React.StatelessComponent<Props> = ({ location }) => (
  <Layout location={location}>
    <SEO />
    <Hero />
    <ContainerWrap container="large" padding="large">
      <Columns>
        <Column>
          <Columns direction="column">
            <Column>
              <Title bottomPadding="small">
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
              <Title bottomPadding="small">
                <NowSVG />
                Now
              </Title>
              <hr />
              <p>
                Currently renovating an old town house in Melbourne with my
                partner Kelly. We have ripped out dry walls, put in new floors
                and now looking to demolish a chimney!
              </p>
              <p>
                Lots of fun and great learnings jumping head first into unknown
                'home builder' territory.
              </p>
            </Column>
          </Columns>
        </Column>
        <Column>
          <Columns>
            <Column>
              <Title bottomPadding="small">
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
                      So much so I am creating a game with React & Electron.
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
