import React from "react"
import styles from "./styles.module.scss"

class LogoHero extends React.Component {
  private svgRef = React.createRef<SVGSVGElement>()

  render() {
    return (
      <svg
        id="heading"
        ref={this.svgRef}
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 704.82 402.51"
        preserveAspectRatio="none"
      >
        <g className={styles.heading}>
          <path
            d="M3.6,125.5V61.3c0-12.4,1.4-23,4.2-31.7c1.5-4.9,3.7-9.5,6.6-13.7
    c5.9-8.5,15.6-13.5,29-15c3-0.3,6.1-0.5,9.1-0.5c16.3,0,28,4.4,35.1,13.3c5.3,6.6,8.6,15.5,10,26.8c0.5,4.1,0.7,8.2,0.7,12.3v14.4
    h-24V54.4c0-2,0-3.9-0.1-5.9c-0.1-5.6-0.5-10-1.1-13.4c-0.7-4.5-2.7-8.1-5.7-10.8c-3-2.6-7.6-3.9-13.9-4c-0.3,0-0.5,0-0.8,0
    c-1.9,0-3.8,0.1-5.7,0.4s-3.7,0.7-5.2,1.3c-1.7,0.6-3.2,1.5-4.5,2.7c-2.4,2.1-4.2,4.7-5.3,7.6c-0.6,1.5-1,3-1.3,4.5
    c-1,4.9-1.5,11.5-1.6,19.6c0,0.4,0,0.8,0,1.2v72.1c0,2.7,0.1,5.4,0.2,8.1c0.3,5.5,1,10.1,2,13.7c1.1,3.9,2.8,7,5,9.3
    c0.7,0.7,1.5,1.4,2.3,2c1.5,1,3.2,1.8,5,2.2c2.6,0.8,5.6,1.1,9.1,1.1c1.8,0,3.5-0.1,5.3-0.4c3.8-0.6,6.9-1.9,9.1-3.9
    c2.2-2,3.9-4.6,4.9-7.5c0.5-1.4,0.8-2.8,1.1-4.2c0.7-4.5,1.2-10.4,1.2-17.8c0-0.8,0-1.6,0-2.4v-13.5h24v13.5c0,5.2-0.3,10.5-1,15.7
    c-0.7,5.3-1.8,10-3.3,14.3c-1.4,4.2-3.4,8.1-5.9,11.7c-3.8,5.3-9.2,9.3-15.4,11.4c-3.7,1.3-7.8,2.2-12.4,2.7
    c-2.6,0.3-5.2,0.4-7.7,0.4c-4.7,0-9.3-0.4-13.9-1.3c-5.2-1-9.8-2.7-13.7-5.1c-4.1-2.4-7.6-5.7-10.3-9.7c-5.7-8.4-9.2-19.3-10.5-32.7
    C3.7,133.4,3.6,129.5,3.6,125.5z"
          />

          <path
            d="M169.1,102.9v-9.2c0-6.6-0.5-11.6-1.5-15.2c-0.3-1-0.6-1.9-1.1-2.8
    c-1.1-2.3-3.2-4-5.7-4.7c-1.1-0.3-2.3-0.5-3.7-0.6c-0.3,0-0.7,0-1,0c-7.9,0-12.4,4.6-13.5,13.8c-0.2,1.5-0.3,3.1-0.2,4.6v6.5
    l-23.8-0.9c0.2-8.9,1.5-16.3,4-22.3c1.4-3.5,3.4-6.7,5.9-9.4c3.4-3.6,7.6-6.2,12.2-7.7c4.8-1.7,10.5-2.5,17-2.5
    c3.4,0,6.7,0.3,10,0.9c3.7,0.7,6.9,1.8,9.8,3.4c2.8,1.5,5.2,3.5,7.2,5.9c2.4,3,4.2,6.4,5.5,10c1.1,3,1.8,6.4,2.3,10.2
    c0.5,3.5,0.7,7.1,0.7,10.7v59.3c0,9.7,0.7,20.1,2.2,31.2h-22c-0.4-2-0.8-4-1.1-6c-1-5.5-1.7-9.8-2-13V165
    c-1.8,5.8-4.9,10.8-9.3,14.8c-3.4,3.1-7.7,5.1-12.3,5.7c-1.5,0.2-3.1,0.3-4.6,0.3c-4.9,0-9.4-1.4-13.4-4.3c-3.9-2.8-7-6.5-9.1-10.8
    c-0.1-0.1-0.1-0.3-0.2-0.4c-2.2-4.6-3.4-9.5-3.4-14.6c0-3.4,0.3-6.9,0.8-10.2c1-5.6,2.9-10.5,5.7-14.6c4.3-6.4,9.9-11.4,16.6-15.2
    c2.3-1.3,4.7-2.5,7.1-3.7c5.4-2.6,11.8-5.4,19.4-8.5C168,103.3,168.5,103.1,169.1,102.9z M169.1,154.3v-36.8c-1.9,1-3.8,2.1-5.6,3.2
    c-3.8,2.3-6.9,4.3-9.3,6.1c-3.2,2.4-6,5.2-8.3,8.5c-0.1,0.2-0.3,0.4-0.4,0.6c-1.7,2.5-2.8,5.4-3.2,8.5c-0.2,1.3-0.3,2.6-0.3,3.9
    c0,3.5,0.4,6.5,1.2,9c0.4,1.2,1,2.4,1.7,3.5c1.5,2.4,4,3.9,6.8,4.3c0.6,0.1,1.2,0.1,1.8,0.1c3.1,0,6.2-1.2,9.2-3.7
    c1-0.8,1.9-1.6,2.8-2.5C167,157.3,168.2,155.8,169.1,154.3z"
          />

          <path
            d="M216.2,183.9V54.1h22.2v12.4c4.3-4.8,9.1-8.4,14.3-10.9
    c5.2-2.5,10.6-3.7,16.3-3.7c9.4,0,15.8,3.9,19.4,11.7c0.7,1.5,1.3,3.1,1.7,4.7c9-10.9,19.8-16.4,32.3-16.4c3,0,5.9,0.5,8.7,1.6
    c3,1.3,5.7,3.3,7.9,5.8c1.9,2.2,3.3,4.7,4.2,7.5c1.5,4.2,2.2,9.2,2.2,15.2v102h-22V83.5c0-6-1-10.1-2.9-12.5
    c-1.9-2.3-4.7-3.5-8.3-3.5c-1.9,0-3.9,0.3-5.7,0.9c-1.6,0.5-3.1,1.1-4.6,1.9c-2.9,1.5-5.6,3.5-8,5.8c-0.6,0.6-1.3,1.3-1.9,1.9v3.8
    v102h-22V83.5c0-1.4-0.1-2.8-0.2-4.1c-0.4-3.8-1.3-6.6-2.7-8.3c-1.9-2.3-4.7-3.5-8.3-3.5c-3.1,0-6.5,0.9-10.1,2.8s-7,4.5-10.1,7.7
    v105.8H216.2z"
          />

          <path
            d="M450.3,183.9v-64.2L411,2h23.6l27.8,87.8L489.8,2h23.8l-39.1,117.7v64.2
    L450.3,183.9L450.3,183.9z"
          />

          <path
            d="M527.5,159.2V54.1h24V152c0,1.3,0.1,2.6,0.2,3.9c0.3,2.7,0.8,4.9,1.7,6.6
    c0.1,0.2,0.2,0.4,0.3,0.6c1.5,2.5,4.2,3.7,8.1,3.7c1.9,0,3.7-0.4,5.5-1c3-1.1,6.2-3,9.7-5.7c0.6-0.4,1.1-0.9,1.7-1.3V54.1h24v129.8
    h-24v-12.8c-3.2,3.1-6.7,5.8-10.5,8.2c-7,4.3-14,6.4-21.2,6.4c-7,0-12.1-2.5-15-7.6c-2.8-4.8-4.3-10.6-4.5-17.6
    C527.5,160.1,527.5,159.7,527.5,159.2z"
          />

          <path
            d="M610.6,215.1l0-17.3c3.1,0.4,5.2,0.7,6.3,0.7c1.3,0,2.5-0.1,3.8-0.3
    c3-0.6,5.2-1.8,6.7-3.8c1.6-2.2,2.6-5.1,2.9-8.6c0.1-1,0.1-2,0.1-2.9l0.2-128.9l24,0l-0.3,131.2c0,7.7-1.6,14.1-4.8,19
    c-1,1.6-2.2,3-3.5,4.3c-5.3,5.1-12.5,7.8-21.7,8.1c-0.5,0-1,0-1.4,0c-4.5,0-8-0.3-10.4-0.9C611.9,215.5,611.3,215.3,610.6,215.1z"
          />

          <path d="M680.5,183.9V54.1h24v129.8H680.5z" />

          <path
            d="M0.4,349l22.5-6.1c0.7,11.7,3,21.1,6.8,28.3c1.5,3,3.8,5.6,6.6,7.5
    c3.4,2.2,7.5,3.3,12.4,3.3c4.8,0,8.8-1,11.9-2.9c1.1-0.7,2.2-1.6,3.1-2.6c1.8-2,3.1-4.3,3.8-6.8c0.8-2.6,1.2-5.6,1.2-9
    c0-6.6-1.2-12.3-3.7-16.9c-0.3-0.6-0.7-1.2-1-1.7c-1.2-1.8-2.5-3.6-3.9-5.3c-1.5-1.7-3.1-3.5-5-5.4c-2-2-4.1-3.9-6.2-5.7l-30.5-26.9
    c-2.7-2.4-5.3-5-7.5-7.9c-2.3-2.9-4.3-6.1-5.8-9.6c-1.4-3.1-2.4-6.3-3-9.7c-0.6-3-1-6.2-1.1-9.6c0-1.2-0.1-2.3-0.1-3.5
    c0-4.2,0.4-8.5,1.3-12.6c1.7-7.4,5.1-13.5,10.1-18.4c5-4.8,11.3-8.1,18.1-9.6c4-0.9,8.3-1.4,13-1.4h0.1c10.2,0,18.6,1.9,25.3,5.8
    c2.7,1.5,5.2,3.5,7.3,5.7c3.3,3.5,5.9,7.5,7.7,11.9c1.6,3.6,2.9,7.7,3.8,12.2c0.8,3.7,1.4,7.5,1.7,11.4l-21.6,5.8
    c-0.2-3.1-0.6-6.2-1.1-9.3c-1.1-6.3-2.8-11.4-5.1-15.3l0,0c-3.2-5.5-8.9-8.4-17-8.6c-0.4,0-0.7,0-1.1,0c-2,0-3.9,0.2-5.8,0.5
    c-2.3,0.5-4.3,1.2-6.1,2.3c-1.1,0.6-2,1.4-2.9,2.3c-1.9,1.9-3.3,4.2-4,6.7c-0.5,1.7-0.9,3.6-1,5.7c-0.1,0.8-0.1,1.7-0.1,2.5
    c0,2,0.1,4,0.4,5.9c0.4,2.9,1.2,5.4,2.3,7.7c0.8,1.7,1.8,3.2,3,4.7c1.7,2.1,3.7,4.3,6.3,6.5l30.8,26.9c4.8,4.2,9.1,8.9,13,13.9
    c2.2,2.9,4.2,5.9,6,9c3.9,6.8,6.2,14.5,6.8,22.3c0.2,1.9,0.3,3.8,0.2,5.8c0,4.6-0.5,9.1-1.6,13.6c-1.7,6.9-5.4,13.2-10.5,18.1
    c-6.4,6.1-14.6,10-23.3,11.1c-2.7,0.4-5.4,0.6-8.1,0.6c-4.7,0-9.3-0.5-13.9-1.5c-8.2-1.8-15.6-6.2-21.1-12.6
    C5.7,378.4,1.3,365.4,0.4,349z"
          />

          <path
            d="M116.5,370.7v-84.6h-13.7v-16h13.7v-38h24v38h20.9v16h-20.9v83.1
    c0,4.2,0.5,7.3,1.6,9.5c0.2,0.5,0.6,1,0.9,1.5c1.6,2.1,4.8,3.1,9.4,3.1c3,0,5.9-0.2,8.8-0.7v17.7c-6,0.9-11.5,1.3-16.6,1.3
    c-3.9,0.1-7.9-0.5-11.6-1.7C122,396.3,116.5,386.6,116.5,370.7z"
          />

          <path
            d="M227.6,318.9v-9.2c0-6.6-0.5-11.6-1.5-15.2c-0.3-1-0.6-1.9-1.1-2.8
    c-1.1-2.3-3.2-4-5.7-4.7c-1.1-0.3-2.3-0.5-3.7-0.6c-0.3,0-0.7,0-1,0c-7.9,0-12.4,4.6-13.5,13.8c-0.2,1.5-0.3,3.1-0.2,4.6v6.5
    l-23.8-0.9c0.2-8.9,1.5-16.3,4-22.3c1.4-3.5,3.4-6.7,5.9-9.4c3.4-3.6,7.6-6.2,12.2-7.7c4.8-1.7,10.5-2.5,17-2.5
    c3.4,0,6.7,0.3,10,0.9c3.7,0.7,6.9,1.8,9.8,3.4c2.8,1.5,5.2,3.5,7.2,5.9c2.4,3,4.2,6.4,5.5,10c1.1,3,1.8,6.4,2.3,10.2
    c0.5,3.5,0.7,7.1,0.7,10.7v59.3c0,9.7,0.7,20.1,2.2,31.2h-22c-0.4-2-0.8-4-1.1-6c-1-5.5-1.7-9.8-2-13V381
    c-1.8,5.8-4.9,10.8-9.3,14.8c-3.4,3.1-7.7,5.1-12.3,5.7c-1.5,0.2-3.1,0.3-4.6,0.3c-4.9,0-9.4-1.4-13.4-4.3c-3.9-2.8-7-6.5-9.1-10.8
    c-0.1-0.1-0.1-0.3-0.2-0.4c-2.2-4.6-3.4-9.5-3.4-14.6c0-3.4,0.3-6.9,0.8-10.2c1-5.6,2.9-10.5,5.7-14.6c4.3-6.4,9.9-11.4,16.6-15.2
    c2.3-1.3,4.7-2.5,7.1-3.7c5.4-2.6,11.8-5.4,19.4-8.5C226.6,319.3,227.1,319.1,227.6,318.9z M227.6,370.3v-36.8
    c-1.9,1-3.8,2.1-5.6,3.2c-3.8,2.3-6.9,4.3-9.3,6.1c-3.2,2.4-6,5.2-8.3,8.5c-0.1,0.2-0.3,0.4-0.4,0.6c-1.7,2.5-2.8,5.4-3.2,8.5
    c-0.2,1.3-0.3,2.6-0.3,3.9c0,3.5,0.4,6.5,1.2,9c0.4,1.2,1,2.4,1.7,3.5c1.5,2.4,4,3.9,6.8,4.3c0.6,0.1,1.2,0.1,1.8,0.1
    c3.1,0,6.2-1.2,9.2-3.7c1-0.8,1.9-1.6,2.8-2.5C225.5,373.3,226.8,371.8,227.6,370.3z"
          />

          <path
            d="M275.5,399.9V270.1h24v18.4c1.3-2.2,2.7-4.2,4.2-6.2
    c3.1-4.1,6.3-7.2,9.6-9.3c2.9-1.9,6.2-3.2,9.6-3.9c1.8-0.4,3.6-0.5,5.4-0.5c0.9,0,1.8,0,2.7,0.1c0.4,0,0.8,0.1,1.1,0.1v26.5
    c-2-0.8-4-1.4-6.1-1.8c-2.5-0.6-4.9-0.9-7.2-0.9c-2.3,0-4.5,0.3-6.7,1c-1.3,0.4-2.6,1-3.8,1.8c-1.3,0.8-2.5,1.8-3.5,2.8
    s-2,2.2-3,3.5c-0.8,1.1-1.6,2.2-2.3,3.4v94.8H275.5z"
          />

          <path
            d="M347.3,399.7V217.8h24v108.5l35-56.1h25.2L401,320.9l29.6,79.1h-24
    l-24.3-66.5l-11,16.6v49.6H347.3z"
          />
        </g>
        <polygon
          className={styles.dot1}
          points="630.7,34.8 630.8,9.7 655.1,9.7 655,34.9 630.7,34.9 "
        />
        <polygon
          className={styles.dot2}
          points="680.5,34.8 680.5,9.7 704.5,9.7 704.5,34.9 680.5,34.9 "
        />
      </svg>
    )
  }
}

export default LogoHero
