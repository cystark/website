import { Reducer } from "redux"

import { AppActions, AppState, TOGGLE_MODAL, SITE_INIT } from "./types"

export const initialState: AppState = {
  openModal: false,
  siteInit: false,
}

const reducer: Reducer<AppState> = (state: AppState = initialState, action) => {
  switch ((action as AppActions).type) {
    case TOGGLE_MODAL:
      return { ...state, openModal: action.openModal }
    case SITE_INIT:
      return { ...state, siteInit: action.siteInit }
    default:
      return state
  }
}

export default reducer
