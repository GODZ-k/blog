import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor({value , onChange}) {
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
    <ReactQuill value={value} onChange={onChange} modules={modules} formats={formats}/>

  )
}

export default Editor