import TableContainer from "@mui/material/TableContainer";
import { filterDivision } from "./SortingHelpers/filterDivision";
import { GroupTable } from "./GroupTable";
import { Paper } from "@mui/material";

const colors = ["#cfd647", "#5a7824", "#73540d", "#71570d", "#75444d"];
const TablesContainer = ({ filters, data, groupVolume }) => {
  const items = filterDivision({ filters, data, groupVolume });
  console.log(items.length);

  return (
    <TableContainer component={Paper}>
      {items.map((group, index) => {
        return <GroupTable group={group} groupIndex={index} />;
      })}
    </TableContainer>
  );
};
export { TablesContainer };
