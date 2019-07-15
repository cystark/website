import { TimelineMax as Timeline } from "gsap"

const fingers = async (node: SVGSVGElement) => {
  return new Promise(resolve => {
    const fingers = node.querySelectorAll("#fingers path")
    const timeline = new Timeline({
      repeat: -1,
      paused: true,
      transformOrigin: "bottom right",
      onComplete: () => resolve(true),
    })
    const fingersArray = Array.from(fingers)

    fingersArray.sort(() => 0.5 - Math.random())
    timeline
      .staggerTo(
        fingersArray,
        0.1,
        {
          rotation: "+=15",
          yoyo: true,
          repeat: 1,
        },
        0.03
      )
      .play()

    return timeline
  })
}

export default fingers
