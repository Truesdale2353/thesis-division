import { useState } from "react";
import {
  TraitsControllerWithData,
  GroupsVolumeController,
} from "../Controllers";
import { Typography, Dialog } from "@mui/material";
import { FileUploader } from "../../FileUploader/FileUploader";
import { StyledHeaer } from "./StyledHeaderComponents/StyledHeader";
import { ActionButtons } from "./ActionButtons";
import { StyledMenuHeader } from "./StyledHeaderComponents/StyledMenuHeader"

const Header = ({ getFilters, uploadFile, setGroupVolume, onGenerate }) => {
  const [open, setOpen] = useState(false);

  const handleUpload = (file) => {
    uploadFile(file);
    setOpen(false);
  };
  return (
    <StyledHeaer>
      <StyledMenuHeader> GROUPS CONTROLLER</StyledMenuHeader>
      <TraitsControllerWithData getFilters={getFilters} />
      <GroupsVolumeController setGroupVolume={setGroupVolume} />
      <ActionButtons onDialog={() => setOpen(true)} onGenerate={onGenerate} />
      <Dialog open={open} onClose={() => setOpen(false)}>
        <FileUploader onUpload={handleUpload}></FileUploader>{" "}
      </Dialog>
    </StyledHeaer>
  );
};
export { Header };
