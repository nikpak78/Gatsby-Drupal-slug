import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"


const footer = () => (
   
    <footer>
<div className="container">
  <div className="row">
    <div className="col">
     News Tech & WEB
    </div>
    <div class="col">
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
    </div>
  </div>
  </div>

  </footer>
 

)


export default footer
