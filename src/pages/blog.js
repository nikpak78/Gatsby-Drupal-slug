import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout2'
import BlogTeaser from '../components/BlogTeaser.js'

const BlogPage = ( { data } ) => (
  <Layout>
    <h1>Blog</h1>
    
    {data.allNodeArticle.edges.map((post) => (
      <BlogTeaser
        slug={post.node.fields.slug}
        key={post.node.id}
        title={post.node.title}
        fluid={ post.node.relationships.field_image.localFile.childImageSharp.fluid }
        
       
        summary={post.node.body.summary.length > 0 ? post.node.body.summary : post.node.body.processed.substring(0, 100)}
      />
    ) )}
  </Layout>
)

export const query = graphql`
  query BlogPageQuery {
    allNodeArticle {
      edges {
        node {
          fields {
            slug
          }
          id
          created
          title
          body {
            processed
            summary
          }
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
        }
      }
    }
  }
`

export default BlogPage
