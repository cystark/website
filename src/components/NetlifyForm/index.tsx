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

const encode = (data: any) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class NetlifyForm extends React.Component<iProps, iState> {
  state = store.get("cystark.userData") || {}
  formRef = React.createRef<HTMLFormElement>()

  handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault()
    const encodedData = encode({ "form-name": "contact", ...this.state })
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodedData,
    })
      .then(response => {
        console.log("====================================")
        console.log(`${JSON.stringify(response, null, 2)}`)
        console.log("====================================")
      })
      .catch(error => alert(error))
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
              method="POST"
              name="contact"
              data-netlify={true}
              data-netlify-honeypot="bot-field"
              className={styles.themePrimary}
              onSubmit={this.handleSubmit}
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
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
