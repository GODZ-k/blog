import React, { useMemo, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CreatePost() {

    const [content,setContent] = useState("")
    const [title, setTitle] = useState("")
    const [summary , setSummary]  = useState('')

    const modules = {
        toolbar: {
          container: [
            [{ header: [2, 3, 4, false] }],
            ["bold", "italic", "underline", "blockquote"],
            [{ color: [] }],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            ["link", "image"],
            ["clean"],
          ],
          handlers: {
            // image: imageHandler,
          },
        },
        clipboard: {
          matchVisual: true,
        },
      }
      const formats = ["header","bold","italic","underline","strike","blockquote",
      "list","bullet","indent","link","image","color","clean",
    ];

  return (
    <div className='flex justify-center items-center min-h-[30vh]'>
        <form action="">
            <div className='my-2'>
                <label htmlFor="" className='block text-xl'>Title</label>
                <input type="text" value={title} onChange={((e)=> setTitle(e.target.value))} size="35" className='border-black bg-none border-2 my-2 py-2 px-4' placeholder='Title' />
            </div>
            <div className='my-2'>
                <label htmlFor="" className='block text-xl'>Summary</label>
                <input type="text" value={summary} onChange={((e)=> setSummary(e.target.value))} size="35" className='border-black bg-none border-2 my-2 py-2 px-4' placeholder='Title' />
            </div>
            <div className='my-2'>
                <label htmlFor="" className='block text-xl'>Image</label>
                <input type="file" size="40" className='border-black bg-none border-2 my-2 py-2 px-4' placeholder='Title' />
            </div>
            <div className='my-2'>
                <label htmlFor="" className='block text-xl'>Content</label>
                <ReactQuill onChange={(value)=> setContent(value)} value={content} modules={modules} formats={formats}/>
            </div>
            <div className='my-4'>
                <button type='submit' className='px-4 py-2 bg-black text-white rounded-md w-full'>Add post</button>
            </div>

        </form>
    </div>
  )
}

export default CreatePost