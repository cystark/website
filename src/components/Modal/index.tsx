import React from "react"
import ReactDOM from "react-dom"
import styles from "./styles.module.scss"
import { connect } from "react-redux"
import { toggleModal } from "../../state/actions"
import { AppState, AppActions, ConnectedReduxProps } from "../../state/types"

const modalRoot =
  typeof document !== `undefined` ? document.getElementById("modal-root") : null

interface Props extends ConnectedReduxProps<AppActions> {
  children?: any
  show?: boolean
}

interface IState {
  show?: boolean
}

type AllProps = Props & AppState

class Modal extends React.Component<AllProps, IState> {
  DivElement: HTMLDivElement | null

  constructor(props: any) {
    super(props)
    this.state = { show: false }
    this.DivElement = null
    if (typeof document !== `undefined`) {
      this.DivElement = document.createElement("div")
    }
  }

  componentDidMount() {
    if (modalRoot && this.DivElement) {
      modalRoot.appendChild(this.DivElement)
    }
  }

  componentDidUpdate(prevProps: AllProps) {
    if (this.props.openModal !== prevProps.openModal) {
      if (this.props.openModal) {
        this.handleOpen()
      }
    }
  }

  componentWillUnmount() {
    if (modalRoot) {
      modalRoot.removeChild(this.DivElement)
    }
  }

  handleOpen() {
    setTimeout(() => {
      if (typeof document !== `undefined`) {
        document.body.style.overflow = "hidden"
      }
      this.setState({
        show: true,
      })
    }, 100)
  }

  handleClose() {
    if (typeof document !== `undefined`) {
      document.body.style.overflow = "initial"
    }
    this.setState({
      show: false,
    })
    setTimeout(() => {
      this.props.dispatch &&
        this.props.dispatch(toggleModal(!this.props.openModal))
    }, 1000)
  }

  render() {
    const { openModal } = this.props
    const { show } = this.state
    if (!this.DivElement) {
      return false
    }
    return ReactDOM.createPortal(
      openModal && (
        <div
          className={`${styles.container}${show ? " " + styles.isOpen : ""}`}
        >
          <div className={styles.overlay} onClick={() => this.handleClose()} />
          <div className={styles.modal}>
            <i className={styles.cross} onClick={() => this.handleClose()}>
              X
            </i>
            <div className={styles.content}>{this.props.children}</div>
          </div>
        </div>
      ),
      this.DivElement
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  openModal: state.openModal,
})

const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
