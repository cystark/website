import React from "react"
import renderer from "react-test-renderer"
import Columns from "."

describe("Columns", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Columns />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
