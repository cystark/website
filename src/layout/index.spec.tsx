import React from "react"
import renderer from "react-test-renderer"
import { PureLayout as Layout } from "."
import { MockSiteDataRaw, MockLocation } from "@context/SiteData"
import { Provider } from "react-redux"
import { initialState } from "@state/reducer"
import configureMockStore from "redux-mock-store"

const mockStore = configureMockStore()
const store = mockStore(initialState)

describe("Layout", () => {
  it("Site Renders", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Layout data={MockSiteDataRaw} location={MockLocation}>
            <div></div>
          </Layout>
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
