import React from "react"
import renderer from "react-test-renderer"
import Card from "."

describe("Card", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Card title="Testing" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
