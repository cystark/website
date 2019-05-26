import React from "react"
import illustration from "./illustration.module.css"

class Clouds extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      grayScene: true,
      whiteScene: true,
      redScene: true,
    }
  }

  componentWillMount() {
    this.setState({ load: true })
  }

  componentWillUnMount() {
    clearInterval(this.interval)
  }

  animationEndGray() {
    this.setState({ grayScene: !this.state.grayScene })
  }

  animationEndRed() {
    this.setState({ redScene: !this.state.redScene })
  }

  animationEndWhite() {
    this.setState({ whiteScene: !this.state.whiteScene })
  }

  render() {
    return (
      <>
        <use
          xlinkHref="#path67_fill"
          transform="translate(154.33 -1337.5)"
          fill="#F3E6D5"
        />
        <use
          xlinkHref="#path68_fill"
          transform="translate(157 -1334.5)"
          fill="#F3E6D5"
        />
        <use
          xlinkHref="#path69_fill"
          transform="translate(135 -1332)"
          fill="#F3E6D5"
        />
        <use
          xlinkHref="#path69_fill"
          transform="translate(135 -1338)"
          fill="#F3E6D5"
        />
        <use
          xlinkHref="#path70_fill"
          transform="translate(135 -1327)"
          fill="#F3E6D5"
        />
        <use
          xlinkHref="#path71_fill"
          transform="translate(137 -1320)"
          fill="#F3E6D5"
        />
        <use
          xlinkHref="#path72_fill"
          transform="translate(140 -1363)"
          fill="#F3E6D5"
        />
        <use
          xlinkHref="#path73_fill"
          transform="translate(136 -1358)"
          fill="#F3E6D5"
        />
        <use
          xlinkHref="#path74_fill"
          transform="matrix(0.9666 -0.256291 0.256291 0.9666 141 -1351.73)"
          fill="#F3E6D5"
        />
        <use
          xlinkHref="#path75_fill"
          transform="matrix(0.974638 0.223788 -0.223788 0.974638 152.177 -1355.81)"
          fill="#F3E6D5"
        />
      </>
    )
  }
}

export default Clouds
