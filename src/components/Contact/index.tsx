import React from "react"
import ContainerWrap from "../ContainerWrap"
import Columns from "../Columns"
import Column from "../Column"
import Theme from "../Theme"
import SiteData from "../../context/SiteData"
import ToggleModal from "../ToggleModal"

const Contact = () => (
  <Theme theme="dark">
    <SiteData.Consumer>
      {({ socialLinks: { email } }) => (
        <ContainerWrap container="wide" padding="small" textAlign="center">
          <Columns>
            <Column>
              <span>Email</span> <ToggleModal>{email.info}</ToggleModal>
            </Column>
          </Columns>
        </ContainerWrap>
      )}
    </SiteData.Consumer>
  </Theme>
)

export default Contact
