import { graphql } from "gatsby"

import React from "react"
import Img from "gatsby-image"
import Layout from "../components/layout"

const BlogPost = ({ data }) => {
  const post = data.nodeArticle
  
  return (
  <Layout>
    <article>
      <h1>{data.nodeArticle.title}</h1>
      <div>
          <Img fluid={ post.relationships.field_image.localFile.childImageSharp.fluid } />
        </div>
        <small><em>{ data.nodeArticle.created }</em></small>
      <span dangerouslySetInnerHTML={{__html: data.nodeArticle.body.processed}}></span>
    </article>
  </Layout>
  
)
  }

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    nodeArticle (fields: { slug: { eq: $slug } }) {
      title
      created
      changed
      relationships {
        field_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      body {
        processed
        summary
      }
    }
  }
`
