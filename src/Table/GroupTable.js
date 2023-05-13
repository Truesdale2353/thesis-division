
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { filterDivision } from "./SortingHelpers/filterDivision";

const colors = ["#cfd647", "#5a7824", "#73540d", "#71570d", "#75444d"];
const GroupTable = ({ filters, data, groupVolume }) => {
  const items = filterDivision({filters, data, groupVolume});

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>email</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">gender</TableCell>
            <TableCell align="right">experience</TableCell>
            <TableCell align="right">personality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row, index) =>
            row.map((row) => (
              <TableRow
                key={row.email}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "background-color": colors[index],
                }}
              >
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right">{row.experience}</TableCell>
                <TableCell align="right">{row.personality}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export { GroupTable }
