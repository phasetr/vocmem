import {Box, Typography} from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {cyrillicToRomanConverter} from "@vocmem/data";
import {Main} from "@vocmem/ui";

export function CompTable() {
  const cs = cyrillicToRomanConverter.cyrillics;
  const rs = cyrillicToRomanConverter.romans;
  return (
    <Main>
      <Box component="h1">文字対照表</Box>
      <Typography>大文字のあとに小文字が出てきます。</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="simple table" sx={{maxWidth: "250px", margin: "0 auto"}}>
          <TableHead>
            <TableRow>
              <TableCell>キリル文字</TableCell>
              <TableCell>ローマ字転写</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cs.map((c, i) => (
              <TableRow
                key={i}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
              >
                <TableCell component="th" scope="row">
                  {c}
                </TableCell>
                <TableCell align="left">{rs[i]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Main>);
}

export default CompTable;
