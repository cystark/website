import { Dispatch, Action, AnyAction } from "redux"

export interface AppState {
  openModal?: boolean
  siteInit?: boolean
}

// src/store/chat/types.ts
export const TOGGLE_MODAL = "TOGGLE_MODAL"
export const SITE_INIT = "SITE_INIT"

export interface OpenModal extends Action {
  type: typeof TOGGLE_MODAL
  openModal: boolean
}

export interface SiteInit extends Action {
  type: typeof SITE_INIT
  siteInit: boolean
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch?: Dispatch<A>
}

export type AppActions = OpenModal | SiteInit
