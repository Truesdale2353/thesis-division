import data from './data'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { filterDivision } from './SortingHelpers/filterDivision';

const colors=['#cfd647', '#5a7824', '#73540d' ]
const TableData = ({filters}) => {

  const items = filterDivision(filters);

    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>email</TableCell>
                <TableCell align="right">firstName</TableCell>
                <TableCell align="right">lastName</TableCell>
                <TableCell align="right">gender</TableCell>
                <TableCell align="right">experience</TableCell>
                <TableCell align="right">personality</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((row, index)=>
                row.map(
                  (row) => (
                <TableRow
                  key={row.email}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, 'background-color': colors[index]}}
                >
                  <TableCell component="th" scope="row">
                    {row.email}
                  </TableCell>
                  <TableCell align="right">{row.firstName}</TableCell>
                  <TableCell align="right">{row.lastName}</TableCell>
                  <TableCell align="right">{row.gender}</TableCell>
                  <TableCell align="right">{row.experience}</TableCell>
                  <TableCell align="right">{row.personality}</TableCell>
                </TableRow>
              )       
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );

}
export default TableData;