import React from "react"
import renderer from "react-test-renderer"
import IconsList from "."
import Logo from "@images/logo.svg"

const icons = [
  {
    name: "Name 1",
    url: "https://google.com",
    icon: Logo,
    text: "SomeText",
  },
  {
    name: "Name 2",
    url: "https://google.com",
    icon: Logo,
    text: "SomeText",
  },
  {
    name: "Name 3",
    url: "https://google.com",
    icon: Logo,
    text: "SomeText",
  },
]

describe("IconsList", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<IconsList icons={icons} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
