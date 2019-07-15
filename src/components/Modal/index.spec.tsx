import React from "react"
import renderer from "react-test-renderer"
import configureMockStore from "redux-mock-store"
import { Provider } from "react-redux"
import Modal from "."

const mockStore = configureMockStore()
const store = mockStore({ openModal: false, siteInit: false })

describe("Modal", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Modal />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
