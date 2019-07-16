import React from "react"
import store from "store"

import styles from "./styles.module.scss"

import ContainerWrap from "@components/ContainerWrap"
import Columns from "@components/Columns"
import Column from "@components/Column"
import Button from "@components/Button"
import Buttons from "@components/Buttons"
import { TitleWithIcon } from "@components/Title"
import { Logo as LogoSVG } from "@components/inline-icons"
import { delay } from "@utils/helpers"
import { navigate } from "gatsby"

interface iProps {}

interface iState {
  [name: string]: string
  replyMessage: string
}

class NetlifyForm extends React.Component<iProps, iState> {
  state = {
    replyMessage: "",
    ...store.get("cystark.userData"),
  }
  formRef = React.createRef<HTMLFormElement>()

  showReplyMessage = (message: string) => {
    this.setState({
      replyMessage: message,
    })
  }

  handleSubmit = async (event: React.FormEvent<EventTarget>) => {
    try {
      event.preventDefault()
      const { name, email, message } = this.state
      const response = await fetch(
        "https://hooks.slack.com/services/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",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify({
            text: `*NEW MESSAGE FROM SITE*\n${name}\n ${email}\n ${message}`,
          }),
        }
      )

      switch (response.status) {
        case 200: //ok
          await this.showReplyMessage(
            "Thank you. I will get back to you as soon as possible"
          )
          break
        case 400: // Bad Request
        case 401: // Unauthorized
        case 402: // Payment Required
        case 403: // Forbidden
        case 404: // Not found
          await this.showReplyMessage(
            "error: something went wrong. please try again later"
          )
          break
        case 500: // Internal Server Error
        case 501: // Not Implemented
        case 502: // Bad Gateway
        case 503: // Service Unavailable
          await this.showReplyMessage(
            "error: there was a server issue. please try again later"
          )
          break
        default:
          return false
      }
    } catch (error) {
      console.log(error)
    }
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

  form = () => (
    <form
      ref={this.formRef}
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
  )

  render() {
    const { replyMessage } = this.state
    const Form = this.form
    return (
      <ContainerWrap>
        <Columns>
          <Column>
            <TitleWithIcon>
              <LogoSVG />
              Lets Work Together
            </TitleWithIcon>
            {replyMessage ? replyMessage : <Form />}
          </Column>
        </Columns>
      </ContainerWrap>
    )
  }
}

export default NetlifyForm
