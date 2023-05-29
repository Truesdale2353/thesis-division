import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { StyledGroupsVolumeController } from "./StyledGroupsVolumeController";

const GroupsVolumeController = ({ setGroupVolume }) => {
  const [volume, setVolume] = useState(1);

  const handleChange = (event) => {
    setVolume(event.target.value);
    setGroupVolume(event.target.value);
  };

  return (
    <StyledGroupsVolumeController>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Group Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={volume}
          label="Group Size"
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
        </Select>
      </FormControl>
    </StyledGroupsVolumeController>
  );
};

export { GroupsVolumeController };