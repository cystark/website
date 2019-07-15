import "@styles/colors.scss"
import "@styles/global.scss"
import wrapWithProvider from "./wrap-with-provider"

export const wrapRootElement = wrapWithProvider

// Loading Portal

if (typeof document !== "undefined") {
  const portal = document.createElement("div")
  portal.id = "modal-root"
  document.body.appendChild(portal)
}
