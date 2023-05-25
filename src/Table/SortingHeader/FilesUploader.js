import React from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { FilePond } from "react-filepond";

import "filepond/dist/filepond.min.css";

const FilesUploader = ({ onUpload }) => {
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    onUpload(file);
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    onUpload(file);
  };

  return (
    <form>
      <div
        className="file-uploader"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <label htmlFor="upload">
          <CloudUploadIcon />{" "}
        </label>
        <input
          hidden
          type="file"
          name="upload"
          id="upload"
          onChange={handleFileChange}
        />
      </div>
    </form>
  );
};

export { FilesUploader };
