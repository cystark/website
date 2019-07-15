import * as React from "react"
import Layout from "../layout/"

//SVG
import {
  Logo as LogoSVG,
  Bronson as BronsonSVG,
  Laptop as LaptopSVG,
  Now as NowSVG,
  Coffee as CoffeeSVG,
} from "@components/inline-icons"

//Icons
import Linktree from "@images/linktree.svg"
import Bolster from "@images/bolster.svg"
import TwentyFour from "@images/twentyfour.svg"

//Components
import Columns from "@components/Columns"
import Column from "@components/Column"
import Title, { TitleWithIcon } from "@components/Title"
import Card from "@components/Card"
import Hero from "@components/Hero"
import SEO from "@components/SEO"
import IconsList from "@components/IconsList"
import ContainerWrap from "@components/ContainerWrap"
import { Location } from "@context/SiteData"

interface Props {
  location: Location
}

export const IndexPage: React.SFC<Props> = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO />
      <Hero />
      <ContainerWrap container="large" padding="large">
        <Columns>
          <Column>
            <Columns direction="column">
              <Column>
                <TitleWithIcon>
                  <LogoSVG />
                  Hello Welcome
                </TitleWithIcon>
                <p>
                  This is my portfolio / lab of ideas, ponders & personal
                  projects.
                </p>
                <p>
                  I am a web developer with interest in React, Frontend,
                  Automation, Animation and Analytcs.
                </p>
                <p>
                  I live with my partner Kelly and have my trusty pooch
                  companion Bronson (named after the rapper / chef
                  extraordinaire 'Action Bronson').
                </p>
                <p>
                  My other passions include: Animation, Games, Agile, GTD,
                  Music, Cooking.
                </p>
              </Column>
              <Column>
                <TitleWithIcon>
                  <NowSVG />
                  Now
                </TitleWithIcon>
                <p>
                  Currently renovating an old town house in Melbourne with my
                  partner Kelly. We have ripped out dry walls, put in new floors
                  and now looking to demolish a chimney!
                </p>
                <p>
                  Lots of fun and great learnings jumping head first into
                  unknown 'home builder' territory.
                </p>
              </Column>
              <Column>
                <TitleWithIcon>
                  <CoffeeSVG />
                  Companies I worked with
                </TitleWithIcon>
                <IconsList
                  icons={[
                    {
                      name: "Linktree",
                      url: "https://linktr.ee",
                      icon: Linktree,
                      text:
                        " is a free tool for optimising your Instagram traffic, whether you're a blogger, an artist or run a content platform.",
                    },
                    {
                      name: "Bolster",
                      url: "https://blstr.co",
                      icon: Bolster,
                      text:
                        " is a Digital & creative agency specialising in music, events and entertainment.",
                    },
                    {
                      name: "24",
                      url: "https://24Digital.com.au",
                      icon: TwentyFour,
                      text:
                        " is a Digital product design studio using research, design and technology to help clients invent their future.",
                    },
                  ]}
                />
              </Column>
            </Columns>
          </Column>
          <Column>
            <Columns direction="column">
              <Column>
                <TitleWithIcon>
                  <BronsonSVG />
                  Recent Projects
                </TitleWithIcon>
                <Columns direction="column">
                  <Column>
                    <Card
                      title="Cameron Richards Portfolio"
                      link="https://cameronrichards.design"
                    >
                      <p>
                        Worked on animating 24 Digital colleagues Gatsby
                        portfolio using GSAP and{" "}
                        <a href="transitionlink.tylerbarnes.ca" target="_blank">
                          TransitionLinks
                        </a>
                        .
                      </p>
                      <p>
                        Collaboration with Tom from{" "}
                        <a href="https://codedrips.com" target="_blank">
                          Codedrips
                        </a>
                        .
                      </p>
                    </Card>
                  </Column>
                </Columns>
              </Column>
              <Column>
                <TitleWithIcon>
                  <LaptopSVG />
                  Projects I am Working on
                </TitleWithIcon>
                <Columns direction="column">
                  <Column>
                    <Card title="Code Typist" label="coming soon">
                      <p>
                        I love typing tests, and have it as my morning ritual. I
                        am yet to find something for coders in a way that I
                        want. So much so I am creating a game with React.
                      </p>
                    </Card>
                  </Column>
                  <Column>
                    <Card title="Blog" label="coming soon">
                      <p>
                        All my bits in one spot! Books I am reading, Music
                        discoveries, Coding nuggets and Vim shortcuts.
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
}
export default IndexPage
