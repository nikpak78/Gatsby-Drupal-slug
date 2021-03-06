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
import Image from './image2'


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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
      
      <Image />
     
      <Header siteTitle={data.site.siteMetadata.title} />
     
        <main>{children}</main>
        
      <Footer />
      
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
