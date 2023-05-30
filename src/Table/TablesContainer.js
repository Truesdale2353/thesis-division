import { GroupTable } from "./GroupTable";
import { Paper } from "@mui/material";

import { StyledTableContainer } from "./StyledTableContainer";

const TablesContainer = ({ items }) => {
  return (
    <StyledTableContainer component={Paper}>
      {items.map((group, index) => {
        return group.length > 0 && <GroupTable group={group} groupIndex={index} key={index}/>;
      })}
    </StyledTableContainer>
  );
};
export { TablesContainer };
