import { ActionCreator } from "redux"
import { OpenModal, SiteInit, TOGGLE_MODAL, SITE_INIT } from "./types"

//Actio
export const toggleModal: ActionCreator<OpenModal> = (openModal: boolean) => ({
  type: TOGGLE_MODAL,
  openModal,
})

export const siteInit: ActionCreator<SiteInit> = (siteInit: boolean) => ({
  type: SITE_INIT,
  siteInit,
})
