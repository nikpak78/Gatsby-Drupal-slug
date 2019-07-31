import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"
import styled from "styled-components"

const PostImage = styled.div`
flex: 25%;
padding-bottom: 7px;
`
const PostText = styled.div`
flex: 75%;
margin-left: 10px;
`

const BlogTeaser = ( {slug, title, summary, fluid  } ) => (
  <div className="blog--teaser">
    <Link to={slug}>
      <h3>{title}</h3>
    </Link>
   
   <div className="teaser">
   <PostImage>
   <Link to={slug}>
  
   <Img fluid={fluid}/>
  </Link>
  </PostImage>
   <PostText>
    <p dangerouslySetInnerHTML={{__html: summary}} />
    </PostText>
  </div>
  </div>
)

export default BlogTeaser