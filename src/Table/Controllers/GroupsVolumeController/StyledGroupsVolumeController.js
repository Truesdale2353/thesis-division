import styled from "styled-components";
import TextField from "@mui/material/TextField";

const StyledGroupsVolumeController = styled(TextField)`
  margin-top: 30px;
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    display: none;
  }
`;

export { StyledGroupsVolumeController };