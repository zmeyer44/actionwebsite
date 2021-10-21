import React, { useEffect } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Welcome from "../containers/Welcome"
import Schools from "../containers/Schools"
import Features from "../containers/Features"
import Steps from "../containers/Steps"
import Examples from "../containers/Examples"
import Support from "../containers/Support"

const IndexPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = ""
  }, [])
  return (
    <Layout style={{ zIndex: 1 }}>
      <Seo title="Home" />
      <Welcome id="welcome" />
      {/* <Schools /> */}
      {/* <Features id="features" /> */}
      <Steps id="steps" />
      <Examples id="about" />
      <Support id="support" />
    </Layout>
  )
}

export default IndexPage
