import React from "react"
import renderer from "react-test-renderer"
import Buttons from "."
import Button from "@components/Button"

describe("Buttons", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Buttons>
          <Button type="submit">Send</Button>
        </Buttons>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
