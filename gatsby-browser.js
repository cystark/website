import "./src/styles/colors.scss"
import "./src/styles/global.scss"
import wrapWithProvider from "./wrap-with-provider"

export const wrapRootElement = wrapWithProvider

// Loading Portal
const portal = document.createElement("div")
portal.id = "modal-root"
document.body.appendChild(portal)


