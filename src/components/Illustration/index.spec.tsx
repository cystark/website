import React from "react"
import renderer from "react-test-renderer"
import Illustration from "."

describe("Illustration", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Illustration />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
