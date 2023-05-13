import { useState } from "react";
import { TraitsControllerWithData, GroupsVolumeController } from "../Controllers";
import { FilesUploader } from "../SortingHeader/FilesUploader";

const Header = ({ getFilters, uploadFile, setGroupVolume }) => {
  return (
    <div className="sorting-header">
      <TraitsControllerWithData getFilters={getFilters} />
      <GroupsVolumeController setGroupVolume={setGroupVolume} />
      <FilesUploader onUpload={uploadFile}></FilesUploader>
    </div>
  );
};
export { Header };
