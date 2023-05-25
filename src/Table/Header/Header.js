import { useState } from "react";
import { TraitsControllerWithData, GroupsVolumeController } from "../Controllers";
import { FileUploader } from "../SortingHeader/test";

const Header = ({ getFilters, uploadFile, setGroupVolume }) => {
  return (
    <div className="sorting-header">
      <TraitsControllerWithData getFilters={getFilters} />
      <GroupsVolumeController setGroupVolume={setGroupVolume} />
      <FileUploader onUpload={uploadFile}></FileUploader>
    </div>
  );
};
export { Header };
