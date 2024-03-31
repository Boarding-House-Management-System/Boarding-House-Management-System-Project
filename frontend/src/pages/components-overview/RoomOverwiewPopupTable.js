import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

function createData(ID, name, payments) {
  return { ID, name, payments };
}

export default function CustomizedTables() {
  const [editableRows, setEditableRows] = useState(rows);

  const handleEdit = (rowIndex) => {
    const updatedRows = editableRows.map((row, index) => (index === rowIndex ? { ...row, isEditing: true } : row));
    setEditableRows(updatedRows);
  };

  const handleSave = (rowIndex) => {
    const updatedRows = editableRows.map((row, index) => (index === rowIndex ? { ...row, isEditing: false } : row));
    setEditableRows(updatedRows);
  };

  const handleInputChange = (e, rowIndex, key) => {
    const { value } = e.target;
    const updatedRows = editableRows.map((row, index) => (index === rowIndex ? { ...row, [key]: value } : row));
    setEditableRows(updatedRows);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 100 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell sx={{ minWidth: 300 }} align="left">
                Name
              </StyledTableCell>
              <StyledTableCell sx={{ minWidth: 100 }} align="right">
                Payements
              </StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {editableRows.map((row, rowIndex) => (
              <StyledTableRow key={row.ID}>
                <StyledTableCell component="th" scope="row">
                  {row.ID}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.isEditing ? <TextField value={row.name} onChange={(e) => handleInputChange(e, rowIndex, 'name')} /> : row.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.isEditing ? (
                    <TextField value={row.payments} onChange={(e) => handleInputChange(e, rowIndex, 'payments')} />
                  ) : (
                    row.payments
                  )}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.isEditing ? (
                    <Button onClick={() => handleSave(rowIndex)}>Save</Button>
                  ) : (
                    <Button onClick={() => handleEdit(rowIndex)}>Edit</Button>
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const rows = [
  createData('991234167V', 'Naveen Lankesha', 'Done'),
  createData('999234567V', 'Kaveen Bankesha', 'Done'),
  createData('991233567V', 'Shavidika Dilum', 'Done'),
  createData('991234577V', 'Ramesh Nissanka', 'Done')
];

// v0.0

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14
//   }
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover
//   },
//   // hide last border
//   '&:last-child td, &:last-child th': {
//     border: 0
//   }
// }));

// function createData(ID, name, payments) {
//   return { ID, name, payments };
// }

// const rows = [
//   createData('1', 'Naveen Lankesha', 'Done'),
//   createData('1', 'Naveen Lankesha', 'Done'),
//   createData('1', 'Naveen Lankesha', 'Done'),
//   createData('1', 'Naveen Lankesha', 'Done')
// ];

// export default function CustomizedTables() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 100 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>ID</StyledTableCell>
//             <StyledTableCell sx={{ minWidth: 300 }} align="left">
//               Name
//             </StyledTableCell>
//             <StyledTableCell sx={{ minWidth: 100 }} align="right">
//               Payements
//             </StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.ID}>
//               <StyledTableCell component="th" scope="row">
//                 {row.ID}
//               </StyledTableCell>
//               <StyledTableCell align="left">{row.name}</StyledTableCell>
//               <StyledTableCell align="right">{row.payments}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
