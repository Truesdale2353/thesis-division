import { useState } from "react";

function FileUploader({onUpload}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    onUpload(file);
    setSelectedFile(file);
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onUpload(file);
  };
  return (
    <div
      className="file-uploader"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {" "}
      {selectedFile ? (
        <div>
          {" "}
          <p>Selected file: {selectedFile.name}</p>{" "}
          <p>File size: {selectedFile.size} bytes</p>{" "}
        </div>
      ) : (
        <div>
          {" "}
          <p>Drag and drop a file here, or click to select a file.</p>{" "}
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
          />{" "}
        </div>
      )}{" "}
    </div>
  );
}
export {FileUploader};
