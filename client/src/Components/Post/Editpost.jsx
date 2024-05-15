import React, { useEffect, useState } from "react";

import { Navigate, useParams, useNavigate } from "react-router-dom";
import Editor from "./Editor";
import axios from "axios";

function Editpost() {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
        const res = await axios.get(`http://localhost:3000/blog/detail/${id}`,{
            withCredentials:true
        });
        const blog = res.data.blog;
        setContent(blog.content)
        setTitle(blog.title)
        setSummary(blog.summary)

      })()
  }, []);

  async function editPost(e) {
    try {
        e.preventDefault()
        const res = await axios.patch(`http://localhost:3000/blog/edit/${id}`,{
            title,
            content,
            summary,
            image
        },{
            headers:{
                "Content-Type":"multipart/form-data"
            },
            withCredentials:true
        })

        const data = res.data
        console.log(data.msg)
        navigate("/")
    } catch (error) {
        console.log("internal server error")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[30vh]">
      <form onSubmit={editPost}>
        <div className="my-2">
          <label htmlFor="" className="block text-xl">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            size="35"
            className="border-black bg-none border-2 my-2 py-2 px-4"
            placeholder="Title"
          />
        </div>
        <div className="my-2">
          <label htmlFor="" className="block text-xl">
            Summary
          </label>
          <input
            type="text"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            size="35"
            className="border-black bg-none border-2 my-2 py-2 px-4"
            placeholder="Summary"
          />
        </div>
        <div className="my-2">
          <label htmlFor="" className="block text-xl">
            Image
          </label>
          <input
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
            size="40"
            className="border-black bg-none border-2 my-2 py-2 px-4"
            placeholder="image"
          />
        </div>
        <div className="my-2">
          <label htmlFor="" className="block text-xl">
            Content
          </label>
          <Editor value={content} onChange={(value) => setContent(value)} />
        </div>
        <div className="my-4">
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white rounded-md w-full"
          >
            Add post
          </button>
        </div>
      </form>
    </div>
  );
}

export default Editpost;
