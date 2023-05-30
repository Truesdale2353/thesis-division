import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { StyledFormControlLabel } from "./StyledFormControlLabel";
import { StyledSortingLabel } from "./StyledSortingLabel";
import { DraggableIndicator } from "./DraggableIndicator";

const SortingHeaderItem = ({ id, label, handleChange, defaultChecked }) => {
  const [isActive, setIsActive] = useState(defaultChecked);
  const onChange = (e) => {
    handleChange(e);
    setIsActive(!isActive);
  };

  return (
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
      label={
        <div className="sorting-label">
          <StyledSortingLabel>{label}</StyledSortingLabel>
          <DraggableIndicator />
        </div>
      }
    />
  );
};

export { SortingHeaderItem };
