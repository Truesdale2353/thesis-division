import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const SortingHeaderItem = ({
  id,
  label,
  color,
  handleChange,
  defaultChecked,
}) => {
  return (
    <FormControlLabel
      className="form-control-style"
      color="#ab47bc"
      control={
        <Switch
          color={color}
          id={id}
          defaultChecked={defaultChecked}
          onChange={(e) => handleChange(e)}
        />
      }
      label={label}
    />
  );
};

export { SortingHeaderItem };
