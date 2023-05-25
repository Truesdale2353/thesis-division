import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";

const GroupTable = ({ group, groupIndex }) => (
  <Table sx={{ width: '30%', height: 60}} aria-label="simple table" className="group-table">
    <TableHead>
      <TableRow>
        <TableCell>{`Група ${groupIndex+1}`}</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {group.map((row, index) =>
          <TableRow
            key={`row.email-${index}`}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
          </TableRow>
      )}
    </TableBody>
  </Table>
);

export { GroupTable };
