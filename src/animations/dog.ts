import { TimelineMax as Timeline } from "gsap"

const dog = async (node: SVGSVGElement) => {
  return new Promise(resolve => {
    const dog = node.querySelectorAll("#dog")
    const timeline = new Timeline({
      repeat: -1,
      paused: true,
      onComplete: () => resolve(true),
    })

    timeline
      .to(
        dog,
        1,
        {
          y: "+=-50",
          x: "+=-100",
        },
        0
      )
      .to(
        dog,
        1,
        {
          y: "+=-50",
          x: "+=100",
        },
        1
      )
      .to(dog, 0.1, { rotation: 20, scaleX: -1, transformOrigin: "50% 50%" }, 1)
      .to(
        dog,
        1,
        {
          y: "+=50",
          x: "+=100",
        },
        2
      )
      .to(
        dog,
        1,
        {
          y: "+=50",
          x: "+=-100",
        },
        3
      )
      .to(
        dog,
        0.1,
        { rotation: "-=20", scaleX: 1, transformOrigin: "50% 50%" },
        3
      )
      .play()

    return timeline
  })
}

export default dog
