import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import {StyledFormControlLabel } from './StyledFormControlLabel';

const SortingHeaderItem = ({
  id,
  label,
  handleChange,
  defaultChecked,
}) => {
  const [isActive, setIsActive] = useState(defaultChecked);
  const onChange = (e) =>{
    handleChange(e);
    setIsActive(!isActive);
  }

  const styledLabel = () => {
    return (
      <Typography variant="h6" component="h2">
        {label}
      </Typography>
    );
  };
  return (
    <div className="test">
      <StyledFormControlLabel
        $isActive={isActive}
        control={
          <Switch
          sx={{
            color: '#8AA3F9',
          }}
            id={id}
            defaultChecked={defaultChecked}
            onChange={(e) => onChange(e)}
          />
        }
        label={styledLabel()}
      />
    </div>
  );
};

export { SortingHeaderItem };
