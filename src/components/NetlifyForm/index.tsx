import React from "react"
import ContainerWrap from "../ContainerWrap"
import Columns from "../Columns"
import Column from "../Column"
import Button from "../Button"
import Buttons from "../Buttons"
import Title from "../Title"
import styles from "./styles.module.scss"
import { Logo as LogoSVG } from "../../inline-icons"

const NetlifyForm = () => (
  <ContainerWrap>
    <Columns>
      <Column>
        <Title>
          <LogoSVG />
          Lets Work Together
        </Title>
        <form name="contact" netlify="string" className={styles.themePrimary}>
          <p>
            <label className={styles.label}>
              Name{" "}
              <input
                className={styles.input}
                type="text"
                name="name"
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
                required
              />
            </label>
          </p>
          <p>
            <label className={styles.label}>
              Message{" "}
              <textarea className={styles.textarea} name="message" required />
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

export default NetlifyForm
