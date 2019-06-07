import React from "react"
import ContainerWrap from "../ContainerWrap"
import Columns from "../Columns"
import Column from "../Column"
import Theme from "../Theme"
import SiteData from "../../context/SiteData"
import { toggleModal } from "../../state/actions"
import { connect } from "react-redux"

const Contact = ({ dispatch, openModal }) => (
  <Theme theme="dark">
    <SiteData.Consumer>
      {({ socialLinks: { email } }) => (
        <ContainerWrap container="wide" padding="small" textAlign="center">
          <Columns>
            <Column>
              <span>Email</span>{" "}
              <a
                href={email.link}
                onClick={event => {
                  event.preventDefault()
                  dispatch(toggleModal(!openModal))
                }}
              >
                {email.info}
              </a>
            </Column>
          </Columns>
        </ContainerWrap>
      )}
    </SiteData.Consumer>
  </Theme>
)

export default connect(
  ({ openModal }) => ({ openModal }),
  null
)(Contact)
