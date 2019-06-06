import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === `TOGGLE_MODAL`) {
    return { ...state, openModal: action.openModal }
  }
  return state
}

const initialState = {
  openModal: false,
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
