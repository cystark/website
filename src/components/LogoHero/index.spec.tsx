import React from "react"
import renderer from "react-test-renderer"
import LogoHero from "."

describe("LogoHero", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<LogoHero />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
