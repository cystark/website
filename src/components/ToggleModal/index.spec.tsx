import React from "react"
import renderer from "react-test-renderer"
import ToggleModal from "."
import configureMockStore from "redux-mock-store"
import { Provider } from "react-redux"
import SiteData from "@context/SiteData"

const mockStore = configureMockStore()
const store = mockStore({ openModal: false, siteInit: false })

describe("ToggleModal", () => {
  it("renders correctly", () => {
    const context = {
      socialLinks: {
        email: { name: "", info: "", link: "cam@cystark.com.au" },
      },
    }
    const tree = renderer
      .create(
        <SiteData.Provider value={context}>
          <Provider store={store}>
            <ToggleModal />
          </Provider>
        </SiteData.Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
