import React from "react"
import styles from "./styles.module.scss"

interface IconObj {
  name: string
  url: string
  text: string
  icon: React.ReactType
}

interface Props {
  icons: IconObj[]
}

const IconsList: React.StatelessComponent<Props> = ({ icons }) => {
  return (
    <ul className={styles.iconList}>
      {icons.map((iconObj, i) => (
        <li className={styles.icon} key={i}>
          <a href={iconObj.url} target="_blank">
            <iconObj.icon />
          </a>
          <p>
            {iconObj.name && (
              <a href={iconObj.url} target="_blank">
                {iconObj.name}
              </a>
            )}
            {iconObj.text}
          </p>
        </li>
      ))}
    </ul>
  )
}

export default IconsList
