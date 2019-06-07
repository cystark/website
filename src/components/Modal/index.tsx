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
    this.state = { show: false }
  }

  componentDidMount() {
    modalRoot.appendChild(this.el)
  }

  componentDidUpdate(prevProps) {
    if (this.props.openModal !== prevProps.openModal) {
      if (this.props.openModal) {
        this.handleOpen()
      }
    }
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }

  handleOpen() {
    setTimeout(() => {
      document.body.style.overflow = "hidden"
      this.setState({
        show: true,
      })
    }, 100)
  }

  handleClose() {
    document.body.style.overflow = "initial"
    this.setState({
      show: false,
    })
    setTimeout(() => {
      this.props.dispatch(toggleModal(!this.props.openModal))
    }, 1000)
  }

  render() {
    const { openModal } = this.props
    const { show } = this.state
    return ReactDOM.createPortal(
      openModal && (
        <div
          className={`${styles.container}${show ? " " + styles.isOpen : ""}`}
        >
          <div className={styles.overlay} onClick={() => this.handleClose()} />
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
