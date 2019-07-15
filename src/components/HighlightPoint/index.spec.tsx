import React from "react"
import renderer from "react-test-renderer"
import HighlightPoint from "."

describe("HighlightPoint", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<HighlightPoint />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
