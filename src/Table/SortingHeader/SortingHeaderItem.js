import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";

const SortingHeaderItem = ({
  id,
  label,
  color,
  handleChange,
  defaultChecked,
}) => {
  const styledLabel = () => {
    return (
      <Typography variant="h6" component="h2">
        {label}
      </Typography>
    );
  };
  return (
    <div className="test">
      <FormControlLabel
        className="form-control-style"
        color="#ab47bc"
        control={
          <Switch
            color="warning"
            id={id}
            defaultChecked={defaultChecked}
            onChange={(e) => handleChange(e)}
          />
        }
        label={styledLabel()}
      />
    </div>
  );
};

export { SortingHeaderItem };
