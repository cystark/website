import React from "react"
import ContainerWrap from "../ContainerWrap"
import Columns from "../Columns"
import Column from "../Column"
import Button from "../Button"
import Buttons from "../Buttons"
import Title from "../Title"
import styles from "./styles.module.scss"
import { Logo as LogoSVG } from "../../inline-icons"
import store from "store"
import { delay } from "../../utils/helpers"

class NetlifyForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.get("cystark.userData") || {}
    console.log(store.get("cystark.userData"))
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ name: "", email: "", message: "" })
    event.target.reset()
  }

  handleUpdate = event => {
    const { name, value } = event.target

    this.setState({ [name]: value }, () => {
      delay(() => {
        store.set("cystark.userData", this.state)
      }, 500)
    })
  }

  render() {
    return (
      <ContainerWrap>
        <Columns>
          <Column>
            <Title>
              <LogoSVG />
              Lets Work Together
            </Title>
            <form
              name="contact"
              netlify="string"
              className={styles.themePrimary}
              onSubmit={this.handleSubmit}
            >
              <p>
                <label className={styles.label}>
                  Name{" "}
                  <input
                    className={styles.input}
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleUpdate}
                    required
                  />
                </label>
              </p>
              <p>
                <label className={styles.label}>
                  Email{" "}
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleUpdate}
                    required
                  />
                </label>
              </p>
              <p>
                <label className={styles.label}>
                  Message{" "}
                  <textarea
                    className={styles.textarea}
                    name="message"
                    value={this.state.message}
                    onChange={this.handleUpdate}
                    required
                  />
                </label>
              </p>
              <Buttons align="right">
                <Button type="submit">Send</Button>
              </Buttons>
            </form>
          </Column>
        </Columns>
      </ContainerWrap>
    )
  }
}

export default NetlifyForm
