import React from "react"
import illustration from "./illustration.module.css"

interface IProps {
  props: any
}

interface IState {
  grayScene: boolean
  whiteScene: boolean
  redScene: boolean
}

class Clouds extends React.Component {
  state: IState
  interval: any

  constructor(props: IProps) {
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
        <path
          className={
            this.state.whiteScene
              ? illustration.whiteCloudForward
              : illustration.whiteCloudBack
          }
          onAnimationEnd={() => this.animationEndWhite()}
          fillRule="evenodd"
          d="M 166.428 44.5262C 161.172 26.7073 147.987 11.4338 129.304 4.20349C 97.3439 -8.16443 61.3967 7.68573 49.0135 39.6059C 48.3431 41.3338 47.7556 43.0734 47.2489 44.8203C 44.7894 44.3435 42.2487 44.0937 39.6497 44.0937C 17.7518 44.0937 0 61.8234 0 83.694C 0 105.565 17.7518 123.294 39.6497 123.294C 51.0559 123.294 61.3372 118.485 68.5708 110.784C 73.2755 114.467 78.5968 117.528 84.4601 119.797C 107.624 128.761 132.882 122.901 149.746 106.844C 157.018 115.63 168.015 121.228 180.32 121.228C 189.113 121.228 197.236 118.37 203.811 113.533C 208.822 118.301 215.606 121.228 223.073 121.228C 238.497 121.228 251 108.741 251 93.3358C 251 77.9316 238.497 65.4435 223.073 65.4435C 220.925 65.4435 218.833 65.6857 216.825 66.1443C 210.789 51.968 196.716 42.0276 180.32 42.0276C 175.432 42.0276 170.752 42.9108 166.428 44.5262Z"
        />
        <path
          className={
            this.state.grayScene
              ? illustration.grayCloudForward
              : illustration.grayCloudBack
          }
          onAnimationEnd={() => this.animationEndGray()}
          transform="translate(703 -1476)"
          d="M 241.354 64.6522C 233.732 38.7791 214.611 16.6019 187.516 6.10348C 141.168 -11.8548 89.0375 11.1597 71.0793 57.5079C 70.1071 60.0168 69.2551 62.5427 68.5203 65.0792C 64.9536 64.3869 61.2691 64.0242 57.5 64.0242C 25.7436 64.0242 0 89.7678 0 121.524C 0 153.281 25.7436 179.024 57.5 179.024C 74.0412 179.024 88.9511 172.04 99.4413 160.859C 106.264 166.206 113.981 170.651 122.484 173.945C 156.076 186.961 192.706 178.453 217.162 155.138C 227.708 167.895 243.655 176.024 261.5 176.024C 274.251 176.024 286.032 171.874 295.567 164.85C 302.834 171.774 312.671 176.024 323.5 176.024C 345.868 176.024 364 157.892 364 135.524C 364 113.157 345.868 95.0242 323.5 95.0242C 320.385 95.0242 317.352 95.3759 314.439 96.0418C 305.686 75.4578 285.278 61.0242 261.5 61.0242C 254.412 61.0242 247.624 62.3067 241.354 64.6522Z"
        />

        <path
          className={
            this.state.redScene
              ? illustration.redCloudForward
              : illustration.redCloudBack
          }
          onAnimationEnd={() => this.animationEndRed()}
          transform="translate(394 -1571)"
          fillRule="evenodd"
          d="M 241.354 64.6522C 233.732 38.7791 214.611 16.6019 187.516 6.10348C 141.168 -11.8548 89.0375 11.1597 71.0793 57.5079C 70.1071 60.0168 69.2551 62.5427 68.5203 65.0792C 64.9536 64.3869 61.2691 64.0242 57.5 64.0242C 25.7436 64.0242 0 89.7678 0 121.524C 0 153.281 25.7436 179.024 57.5 179.024C 74.0412 179.024 88.9511 172.04 99.4413 160.859C 106.264 166.206 113.981 170.651 122.484 173.945C 156.076 186.961 192.706 178.453 217.162 155.138C 227.708 167.895 243.655 176.024 261.5 176.024C 274.251 176.024 286.032 171.874 295.567 164.85C 302.834 171.774 312.671 176.024 323.5 176.024C 345.868 176.024 364 157.892 364 135.524C 364 113.157 345.868 95.0242 323.5 95.0242C 320.385 95.0242 317.352 95.3759 314.439 96.0418C 305.686 75.4578 285.278 61.0242 261.5 61.0242C 254.412 61.0242 247.624 62.3067 241.354 64.6522Z"
        />
      </>
    )
  }
}

export default Clouds
