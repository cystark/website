import React from "react"
import styles from "./styles.module.scss"
import VerticalPadding from "../VerticalPadding"
import ContainerWrap from "../ContainerWrap"

const Footer = () => (
  <div className={styles.container}>
    <VerticalPadding>
      <ContainerWrap container={"wide"} textAlign={"textRight"}>
        <p className={styles.text}>
          Designed and Developed By Cam Y Stark 2019
        </p>
      </ContainerWrap>
    </VerticalPadding>
  </div>
)

export default Footer
