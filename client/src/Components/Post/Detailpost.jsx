import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detailpost() {
    const {id} = useParams()
    const [detail , setDetail] =  useState({})

    useEffect(()=>{
        (async()=>{
   const res = await axios.get(`http://localhost:3000/blog/detail/${id}`,{
    withCredentials:true
   })
   const data = res.data
   setDetail(data.blog)
        })()
    },[id])

  return (
    <div>
        <div className=' h-[30vh] w-full'>
            <img src={detail.image} className=' w-full h-full' alt="" srcset="" />
        </div>
        <div className='px-5 pt-3'>
            <p className=' text-gray-500'>{detail.createdAt}</p>
        </div>
        <div className=' px-5 py-5'>
            <h1 className=' text-3xl font-bold '>{detail.title}</h1>
        </div>
        <div className=' px-5' dangerouslySetInnerHTML={{__html:detail.content}}/>
    </div>
  )
}

export default Detailpost