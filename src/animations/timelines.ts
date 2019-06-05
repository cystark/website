import { TimelineMax as Timeline, Power1 } from "gsap"

const getDefaultTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true })
  const content = node.querySelector(".content")
  const contentInner = node.querySelector(".content--inner")

  timeline
    .from(node, 0.3, {
      display: "none",
      autoAlpha: 0,
      delay,
      ease: Power1.easeIn,
    })
    .from(content, 0.15, { autoAlpha: 0, y: 25, ease: Power1.easeInOut })
    .from(contentInner, 0.15, {
      autoAlpha: 0,
      delay: 0.15,
      ease: Power1.easeIn,
    })

  return timeline
}

const getHomeTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true })
  const texts = node.querySelectorAll("h1 > div")

  timeline
    .from(node, 0, { display: "none", autoAlpha: 0, delay })
    .staggerFrom(
      texts,
      0.375,
      { autoAlpha: 0, x: -25, ease: Power1.easeOut },
      0.125
    )

  return timeline
}

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5
  let timeline

  if (pathname === "/") timeline = getHomeTimeline(node, delay)
  else timeline = getDefaultTimeline(node, delay)

  return timeline
}

export const exit = node => {
  const timeline = new Timeline({ paused: true })

  timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut })
  return timeline
}

export const logo = node => {
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

export const illustration = node => {
  const timeline = new Timeline({ paused: true })
  timeline
    .to(
      node,
      1.5,
      {
        opacity: 1,
        ease: Power1.anticipate,
      },
      0.1
    )
    .fromTo(
      node.querySelectorAll("#stuff"),
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
    .fromTo(
      node.querySelectorAll("#coffee"),
      1,
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
      0.9
    )
    .fromTo(
      node.querySelectorAll("#laptop"),
      1,
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
      0.4
    )
    .fromTo(
      node.querySelectorAll("#chair"),
      1.3,
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
      0.6
    )
    .fromTo(
      node.querySelectorAll("#guy"),
      0.8,
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
      1.0
    )
    .fromTo(
      node.querySelectorAll("#dog"),
      1.7,
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
      1.0
    )
    .play()

  return timeline
}
