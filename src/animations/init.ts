import { TimelineMax as Timeline, Power1 } from "gsap"

const init = async (node: SVGSVGElement) => {
  return new Promise(resolve => {
    const timeline = new Timeline({
      paused: true,
      onComplete: () => resolve(true),
    })
    timeline
      .to(
        node,
        1.5,
        {
          opacity: 1,
          ease: Power1.easeInOut,
        },
        0.1
      )
      .fromTo(
        node.querySelectorAll("#stuff"),
        1.5,
        {
          y: "+=50",
          opacity: 0,
          ease: Power1.easeInOut,
        },
        {
          y: "0",
          opacity: 1,
          ease: Power1.easeInOut,
        },
        0.5
      )
      .fromTo(
        node.querySelectorAll("#coffee"),
        1,
        {
          y: "+=50",
          opacity: 0,
          ease: Power1.easeInOut,
        },
        {
          y: "0",
          opacity: 1,
          ease: Power1.easeInOut,
        },
        0.9
      )
      .fromTo(
        node.querySelectorAll("#laptop"),
        1,
        {
          y: "+=50",
          opacity: 0,
          ease: Power1.easeInOut,
        },
        {
          y: "0",
          opacity: 1,
          ease: Power1.easeInOut,
        },
        0.4
      )
      .fromTo(
        node.querySelectorAll("#chair"),
        1.3,
        {
          y: "+=50",
          opacity: 0,
          ease: Power1.easeInOut,
        },
        {
          y: "0",
          opacity: 1,
          ease: Power1.easeInOut,
        },
        0.6
      )
      .fromTo(
        node.querySelectorAll("#guy"),
        0.8,
        {
          y: "+=50",
          opacity: 0,
          ease: Power1.easeInOut,
        },
        {
          y: "0",
          opacity: 1,
          ease: Power1.easeInOut,
        },
        1.0
      )
      .fromTo(
        node.querySelectorAll("#dog"),
        1.7,
        {
          y: "+=50",
          opacity: 0,
          ease: Power1.easeInOut,
        },
        {
          y: "0",
          opacity: 1,
          ease: Power1.easeInOut,
        },
        1.0
      )
      .play()

    return timeline
  })
}

export default init
