import React from "react"
import styles from "./styles.module.css"
import VerticalPadding from "../VerticalPadding"
import ContainerWrap from "../ContainerWrap"

const Footer = () => (
  <div className={styles.container}>
    <VerticalPadding padding={"body"}>
      <ContainerWrap>
        <p className={styles.text}>
          Designed and Developed By Cam Y Stark 2019
        </p>
      </ContainerWrap>
    </VerticalPadding>
  </div>
)

export default Footer
