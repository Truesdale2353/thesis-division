import TableContainer from "@mui/material/TableContainer";
import { GroupTable } from "./GroupTable";
import { Paper } from "@mui/material";

const TablesContainer = ({ items }) => {
  return (
    <TableContainer component={Paper}>
      {items.map((group, index) => {
        return group.length > 0 && <GroupTable group={group} groupIndex={index} />;
      })}
    </TableContainer>
  );
};
export { TablesContainer };
