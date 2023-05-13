import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { FilePond } from 'react-filepond'

import 'filepond/dist/filepond.min.css'



const FilesUploader = ({ onUpload }) => {

  const upload = (event) =>{
    event.preventDefault()
    console.log(event.dataTransfer.files)
  }
  return (
    <form >
      <div className="file-uploader" onDragOver={(e)=>e.preventDefault()} onDrop={onUpload}>
      <label htmlFor="upload">
        <CloudUploadIcon />{" "}
      </label>
      <input hidden type="file" name="upload" id="upload" onChange={onUpload} onDrop={onUpload}  />
      </div>
    </form>

  );
};

export { FilesUploader };
