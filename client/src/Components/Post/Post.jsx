import React from 'react'
import "./Post.css"

function Post() {
  return (
    <div className='post'>
        <div className='image'>
            <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
        <div className='content'>
            <h1 className='title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nulla.</h1>
            <div className='info'>
                <p className='author'>Tanmay khatri</p>
                <p className='time'>23-10-2202 12"67pm</p>
            </div>
            <div>
                <p className='description'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus consectetur alias, vel tenetur suscipit sapiente, repudiandae nisi deserunt impedit, facere maiores odit. Magnam praesentium nam earum neque repellat ab culpa!
                </p>
            </div>
        </div>
    </div>
  )
}

export default Post