import React from "react"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div className="container" style={{ marginTop: 150 }}>
      <h1>NOT FOUND</h1>
      <p>
        Go back to the <a href="/">home page</a>.
      </p>
    </div>
  </>
)

export default NotFoundPage
