import React from "react"
import { connect } from "react-redux"
import { toggleModal } from "@state/actions"
import SiteData from "@context/SiteData"
import { AppState, AppActions, ConnectedReduxProps } from "@state/types"

interface Props extends ConnectedReduxProps<AppActions> {
  children?: any
}

type AllProps = Props & AppState

const ToggleModal: React.FunctionComponent<AllProps> = props => {
  const { dispatch, openModal, children } = props
  return (
    <SiteData.Consumer>
      {({ socialLinks = {} }) => (
        <a
          onClick={e => {
            e.preventDefault()
            //Could be a better way to do this
            //Only warny I could find to remove the typescipt error on dispatch
            //was to make it conditional. Looking for better way here
            dispatch && dispatch(toggleModal(!openModal))
          }}
          href={socialLinks.email!.link}
        >
          {children}
        </a>
      )}
    </SiteData.Consumer>
  )
}

const mapStateToProps = (state: AppState) => ({
  openModal: state.openModal,
})

const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleModal)
