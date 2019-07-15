import React from "react"
import renderer from "react-test-renderer"
import ContainerWrap from "."

describe("ContainerWrap", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ContainerWrap />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
