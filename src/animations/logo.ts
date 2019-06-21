import { TimelineMax as Timeline, Power1 } from "gsap"

const logo = node => {
  const timeline = new Timeline({ paused: true })
  timeline
    .fromTo(
      node.querySelectorAll("#heading"),
      1.5,
      {
        y: "+=50",
        opacity: 0,
        ease: Power1.anticipate,
      },
      {
        y: "0",
        opacity: 1,
        ease: Power1.anticipate,
      },
      0.5
    )
    .play()

  return timeline
}

export default logo
