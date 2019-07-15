import React from "react"
import renderer from "react-test-renderer"
import NetlifyForm from "."

describe("NetlifyForm", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<NetlifyForm />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
