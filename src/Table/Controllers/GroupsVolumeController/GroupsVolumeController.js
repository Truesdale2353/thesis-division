import { useState } from "react";
import { StyledGroupsVolumeController } from "./StyledGroupsVolumeController";


const GroupsVolumeController = ({ setGroupVolume }) => {
  const [volume, setVolume] = useState(1);

  const handleChange = (event) => {
    setVolume(event.target.value);
    setGroupVolume(Number(event.target.value));
  };

  return (
      <StyledGroupsVolumeController
      TextField
      id="outlined-basic"
      label="Количество групи"
      type="number"
      value={volume}
      InputProps={{
        inputProps: { min: 1 },
      }}
      onChange={handleChange}
      variant="outlined">

      </StyledGroupsVolumeController>
  );
};

export { GroupsVolumeController };
