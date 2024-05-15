import axios from 'axios'
import moment from "moment"
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../../Context/userContext'

function Detailpost() {
    const {id} = useParams()
    const {userInfo} = useContext(UserContext)
    const [detail , setDetail] =  useState({})
    const navigate = useNavigate()

    let timeago = moment(detail.createdAt).fromNow()

    if(timeago === "a few seconds ago"){
      timeago = "Just now"
    }

    useEffect(()=>{
        (async()=>{
   const res = await axios.get(`http://localhost:3000/blog/detail/${id}`,{
    withCredentials:true
   })
   const data = res.data
   setDetail(data.blog)
        })()
    },[id])

    async function deletePost(id){
      try {
        const res = await axios.delete(`http://localhost:3000/blog/delete/${id}`,{
          withCredentials:true
        })
        console.log(res.data.msg)
        navigate("/")
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div>
        <div className=' h-[30vh] w-full'>
            <img src={detail.image} className=' w-full h-full' alt="" srcset="" />
        </div>
        <div className='px-5 pt-3'>
            <p className=' text-gray-500'>{timeago}</p>
            <p>{userInfo.email}</p>
            {userInfo.id === detail.owner && ( 
              <>
              <Link to={`/edit/${detail._id}`} className=' bg-gray-900 px-4 rounded-sm text-white text-sm mr-2 py-2'>Edit</Link>
              <Link onClick={()=>{
                deletePost(detail._id)
              }} className=' bg-red-900 rounded-sm px-4 py-2 text-sm text-white'>Delete</Link>
              </>
            )}
        </div>
        <div className=' px-5 py-5'>
            <h1 className=' text-3xl font-bold '>{detail.title}</h1>
        </div>
        <div className=' px-5' dangerouslySetInnerHTML={{__html:detail.content}}/>
    </div>
  )
}

export default Detailpost