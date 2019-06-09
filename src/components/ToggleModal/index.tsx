import React from "react"
import { connect } from "react-redux"
import { toggleModal } from "../../state/actions"
import SiteData from "../../context/SiteData"

interface Props {
  url?: string
}

const ToggleModal: React.FunctionComponent<Props> = ({
  openModal,
  dispatch,
  children,
  url,
}) => {
  return (
    <SiteData.Consumer>
      {({ socialLinks: { email } }) => (
        <a
          onClick={e => {
            e.preventDefault()
            dispatch(toggleModal(!openModal))
          }}
          href={email.link}
        >
          {children}
        </a>
      )}
    </SiteData.Consumer>
  )
}

export default connect(
  ({ openModal }) => ({ openModal }),
  null
)(ToggleModal)
