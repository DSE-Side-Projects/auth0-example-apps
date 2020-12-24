import React from "react"
import { Auth0Provider } from "./src/utils/auth"
import "./src/tailwind-theme.min.css"
import "./src/utils/main"

const onRedirectCallback = (appState) => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  )
}

const AUTH0_DOMAIN = "auth.dseapps.dev"
const AUTH0_CLIENTID = "vwsI9UiL0Q7LXSOe2imitZvPg1ffRm4C"
const AUTH0_AUDIENCE = "https://sample-apps.auth0.com/api/v2/"

const Auth0Domain = AUTH0_DOMAIN
const Auth0ClientID = AUTH0_CLIENTID
const Auth0Audience = AUTH0_AUDIENCE
export const wrapRootElement = ({ element }) => (
  <Auth0Provider
    domain={Auth0Domain}
    client_id={Auth0ClientID}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
    audience={Auth0Audience}
  >
    {element}
  </Auth0Provider>
)
