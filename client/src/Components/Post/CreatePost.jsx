import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CreatePost() {
  return (
    <div className='flex justify-center items-center min-h-[30vh]'>
        <form action="">
            <div className='my-2'>
                <label htmlFor="" className='block text-xl'>Title</label>
                <input type="text" size="35" className='border-black bg-none border-2 my-2 py-2 px-4' placeholder='Title' />
            </div>
            <div className='my-2'>
                <label htmlFor="" className='block text-xl'>Image</label>
                <input type="file" size="40" className='border-black bg-none border-2 my-2 py-2 px-4' placeholder='Title' />
            </div>
            <div className='my-2'>
                <label htmlFor="" className='block text-xl'>Content</label>
                <ReactQuill/>
            </div>
            <div className='my-4'>
                <button type='submit' className='px-4 py-2 bg-black text-white rounded-md w-full'>Add post</button>
            </div>

        </form>
    </div>
  )
}

export default CreatePost