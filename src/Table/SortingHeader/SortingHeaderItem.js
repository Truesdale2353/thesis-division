import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import { StyledFormControlLabel } from "./StyledFormControlLabel";
import { StyledSortingLabel } from "./StyledSortingLabel";

const SortingHeaderItem = ({ id, label, handleChange, defaultChecked }) => {
  const [isActive, setIsActive] = useState(defaultChecked);
  const onChange = (e) => {
    handleChange(e);
    setIsActive(!isActive);
  };

  return (
    <div>
      <StyledFormControlLabel
        $isActive={isActive}
        control={
          <Switch
            sx={{
              color: "#8AA3F9",
            }}
            id={id}
            defaultChecked={defaultChecked}
            onChange={(e) => onChange(e)}
          />
        }
        label={<StyledSortingLabel>{label}</StyledSortingLabel>}
      />
    </div>
  );
};

export { SortingHeaderItem };
