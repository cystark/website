import React from "react"
import store from "store"

import styles from "./styles.module.scss"

import ContainerWrap from "@components/ContainerWrap"
import Columns from "@components/Columns"
import Column from "@components/Column"
import Button from "@components/Button"
import Buttons from "@components/Buttons"
import Title from "@components/Title"
import { Logo as LogoSVG } from "@components/inline-icons"
import { delay } from "@utils/helpers"

interface iProps {}

interface iState {
  [name: string]: string
}

class NetlifyForm extends React.Component<iProps, iState> {
  state = store.get("cystark.userData") || {}
  formRef = React.createRef<HTMLFormElement>()

  handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault()
    this.setState({ name: "", email: "", message: "" })
    this.formRef.current!.reset()
  }

  handleUpdate = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget

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
              ref={this.formRef}
              name="contact"
              data-netlify={true}
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
