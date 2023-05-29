import { Header } from "../Header";
import styled from "styled-components";

const StyledHeaer = styled.div`
  margin:30px;
  width: 358px;
  height: calc(100vh - 100px);
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 6px 12px #00000029;
  border-radius: 25px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: right;
  padding: 20px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

export { StyledHeaer };
