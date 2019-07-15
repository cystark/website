import React from "react"
import renderer from "react-test-renderer"
import VerticalPadding from "."

describe("VerticalPadding", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<VerticalPadding />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
