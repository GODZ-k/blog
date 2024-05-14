import React from 'react'
import "./Post.css"

function Post({title, image, summary,owner , createdAt}) {
  return (
    <div className='post'>
        <div className='image'>
            <img src={image} alt="" />
        </div>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <div className='info'>
                <p className='author'>{owner}</p>
                <p className='time'>{createdAt}</p>
            </div>
            <div>
                <p className='description'>
{summary}             
   </p>
            </div>
        </div>
    </div>
  )
}

export default Post