import * as React from "react"
import Layout from "../layout/"

import Main from "../components/Main"

interface Props {
  location: any
}

const IndexPage: React.StatelessComponent<Props> = ({ location }) => (
  <Layout location={location}>
    <Main />
  </Layout>
)

export default IndexPage
