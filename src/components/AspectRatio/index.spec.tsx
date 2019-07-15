import React from "react"
import renderer from "react-test-renderer"
import AspectRatio from "."

describe("AspectRatio", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <AspectRatio ratio={4 / 6}>
          <div></div>
        </AspectRatio>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
