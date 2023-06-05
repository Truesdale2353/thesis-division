import { useRef } from "react";
import { StyledFileUploader } from "./StyledFileUploader";
import { StyledTitle } from "./StyledTitle";
import { StyledDropSection } from "./StyledDropSection";
import uploadFile from'./upload-file.png';

function FileUploader({ onUpload }) {
  const inputRef = useRef(null);

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

  const handleClick = () => {
    inputRef.current.click();
  };
  return (
    <StyledFileUploader>
      <StyledDropSection
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleClick}
      >
        <img  src={uploadFile} alt="upload file" style={{ marginTop:'70px'}}/>
        <StyledTitle variant="h6">Click to open dialog or drag & drop your file</StyledTitle>
        <input
          style={{ display: "none" }}
          ref={inputRef}
          type="file"
          accept=".xlsx"
          onChange={handleFileChange}
        />
      </StyledDropSection>
    </StyledFileUploader>
  );
}
export { FileUploader };
