import React from "react"
import styles from "./styles.module.scss"
import ContainerWrap from "@components/ContainerWrap"
import SiteData from "@context/SiteData"

const Footer = () => (
  <SiteData.Consumer>
    {({ copyright }) => (
      <div className={styles.container}>
        <ContainerWrap container="wide" padding="small" textAlign="center">
          <p className={styles.text}>{copyright}</p>
        </ContainerWrap>
      </div>
    )}
  </SiteData.Consumer>
)

export default Footer
