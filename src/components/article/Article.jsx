import React from 'react'
import './Article.scss'

const Article = ({imageUrl}) => {
  return (
    <div className="article">
      <div className="article-image">
        <img src={imageUrl} alt="image" />
      </div>
      <div className="article-content">
        <h1>Article</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, ficia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  )
}

export default Article