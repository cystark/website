import React from "react"
import renderer from "react-test-renderer"
import Concact from "."
import configureMockStore from "redux-mock-store"
import { Provider } from "react-redux"
import SiteData, { MockSiteData } from "@context/SiteData"

const mockStore = configureMockStore()
const store = mockStore({ openModal: false, siteInit: false })

describe("Concact", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <SiteData.Provider value={MockSiteData}>
          <Provider store={store}>
            <Concact />
          </Provider>
        </SiteData.Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
