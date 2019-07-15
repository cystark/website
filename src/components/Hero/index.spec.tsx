import React from "react"
import renderer from "react-test-renderer"
import Hero from "."
import configureMockStore from "redux-mock-store"
import { Provider } from "react-redux"
import { initialState } from "@state/reducer"

const mockStore = configureMockStore()
const store = mockStore(initialState)

describe("Hero", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Hero />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
