import React from "react"
import styles from "./styles.module.scss"
import ContainerWrap from "../ContainerWrap"
import Columns from "../Columns"
import Column from "../Column"
import ToggleModal from "../ToggleModal"
import Title from "../../components/Title"
import Button from "@components/Button"

const Contact = () => (
  <div className={styles.container}>
    <ContainerWrap container="wide" padding="medium" textAlign="center">
      <Columns direction="column">
        <Column>
          <Title textAlign="center" size="medium">
            Let's Work Together{" "}
          </Title>
          <ToggleModal>
            <Button theme="ghostWhite">Click here</Button>
          </ToggleModal>
        </Column>
      </Columns>
    </ContainerWrap>
  </div>
)

export default Contact
