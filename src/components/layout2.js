/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Nava from "./nava"
import Footer from "./footer"
import Header from "./header"
import "./layout.css"
import { Container,
} from "reactstrap"
import StyledBackgroundSection from "./StyledBackgroundSection"


const Layout2 = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SitTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
     
     
      <Container>
      <Nava />
      <StyledBackgroundSection />
      
      <Header sitTitle={data.site.siteMetadata.title} />
      
        <main>{children}</main>
      <Footer />
      </Container>
    </>
  )
}

Layout2.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout2
