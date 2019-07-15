import React from "react"
import renderer from "react-test-renderer"
import Block from "."

describe("Block", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Block />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
