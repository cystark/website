// ./stc/configureStore.ts

import { createStore, Store } from "redux"

import { AppState } from "./types"

import reducer from "./reducer"

export default function configureStore(
  initialState: AppState
): Store<AppState> {
  return createStore(
    reducer,
    initialState
    //middleware
  )
}
