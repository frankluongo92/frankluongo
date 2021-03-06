import React from "react"

import Layout from "src/components/layout"
import SEO from "src/components/seo"

import Intro from "src/components/homepage/intro";
import AboutMe from "src/components/homepage/aboutMe";
import Projects from "src/components/homepage/projects";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Intro />
    <AboutMe />
    <Projects />
  </Layout>
)

export default IndexPage
