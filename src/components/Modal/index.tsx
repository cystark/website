import React from "react"
import ReactDOM from "react-dom"
import styles from "./styles.module.scss"
import { connect } from "react-redux"
import { toggleModal } from "../../state/actions"

const modalRoot = document.getElementById("modal-root")

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement("div")
  }

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  handleOpen() {
    document.body.style.overflow = "hidden"
  }

  handleClose() {
    document.body.style.overflow = "initial"
    this.props.dispatch(toggleModal(!this.props.openModal))
  }

  render() {
    return ReactDOM.createPortal(
      this.props.openModal && (
        <div className={styles.container} onClick={() => this.handleClose()}>
          <div className={styles.modal}>{this.props.children}</div>
        </div>
      ),
      this.el
    )
  }
}

export default connect(
  ({ openModal }) => ({ openModal }),
  null
)(Modal)
