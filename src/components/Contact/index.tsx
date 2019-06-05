import React from "react"
import ContainerWrap from "../ContainerWrap"
import Columns from "../Columns"
import Column from "../Column"
import Title from "../Title"
import Theme from "../Theme"
import styles from "./styles.module.scss"

const Contact = () => (
  <Theme theme="dark">
    <ContainerWrap container="small" padding="medium" textAlign="center">
      <Columns>
        <Column mobile="half">
          <p>
            Email <a href="mailto:cam@cystark.com.au">cam@cystark.com.au</a>
          </p>
        </Column>
        <Column mobile="half">
          <p>
            Twitter <a href="https://twitter.com/camyujistark">@camyujistark</a>
          </p>
        </Column>
      </Columns>
    </ContainerWrap>
  </Theme>
)

export default Contact
