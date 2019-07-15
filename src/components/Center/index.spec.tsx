import React from "react"
import renderer from "react-test-renderer"
import Center from "."

describe("Center", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Center>
          <div>A</div>
        </Center>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
