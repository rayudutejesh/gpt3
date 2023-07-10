import React from 'react'
import './Blog.scss'
import { blog01 , blog02, blog03, blog04, blog05 } from "./index.js";
import { Article } from '../../components/index.js'

const Blog = () => {
  return (
    <div className="blog section__padding" id='blog'>
      <div className="blog-heading">
        <h1 className="gradient__text">
          A Lot Is Happening, 
        </h1>
        <h1 className="gradient__text">
          We are Blogging About It.
        </h1>
      </div>
      <div className="blog-container">
        <div className="groupA">
          <Article imageUrl={blog01}/>
        </div>
        <div className="groupB">
          <Article imageUrl={blog02}/>
          <Article imageUrl={blog03}/>
          <Article imageUrl={blog04}/>
          <Article imageUrl={blog05}/>
        </div>
      </div>
    </div>
  )
}

export default Blog