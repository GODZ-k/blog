import React, { useEffect, useState } from 'react'
import { Post } from '../../Components'
import axios from 'axios'

function Home() {

  const [blogs, setBlogs] =  useState([])

  useEffect(()=>{
    (async()=>{
      const res = await axios.get("http://localhost:3000/blogs")
      const data = res.data
      setBlogs(data.blogs)
    })()
  },[])
  return (
    <>
   {blogs.map((blog)=>(
    <Post title={blog.title} id={blog._id} summary={blog.summary} image={blog.image} owner={blog.owner.email} createdAt={blog.createdAt}/>
   )) }
    </>
  )
}

export default Home