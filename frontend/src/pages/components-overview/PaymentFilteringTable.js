import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'payment_date', headerName: 'Payment Date', width: 200 },
  {
    field: 'payment',
    headerName: 'Payment',
    type: 'number',
    width: 200
  },
  {
    field: 'receipt',
    headerName: 'Receipt',
    width: 200
  },
  {
    field: 'note',
    headerName: 'Note',
    width: 200
  }
];

const rows = [
  { id: 1, payment_date: '06/04/2024', payment: 10000, receipt: 'png', note: 'text' },
  { id: 2, payment_date: '09/15/2024', payment: 7500, receipt: 'jpg', note: 'invoice' },
  { id: 3, payment_date: '02/28/2024', payment: 12000, receipt: 'pdf', note: 'receipt' },
  { id: 4, payment_date: '11/11/2024', payment: 8800, receipt: 'gif', note: 'note' },
  { id: 5, payment_date: '07/30/2024', payment: 9500, receipt: 'jpeg', note: 'invoice' },
  { id: 6, payment_date: '04/22/2024', payment: 11000, receipt: 'bmp', note: 'text' },
  { id: 7, payment_date: '08/09/2024', payment: 8300, receipt: 'tiff', note: 'receipt' },
  { id: 8, payment_date: '03/18/2024', payment: 10500, receipt: 'png', note: 'note' },
  { id: 9, payment_date: '10/05/2024', payment: 7700, receipt: 'jpg', note: 'invoice' },
  { id: 10, payment_date: '05/11/2024', payment: 9200, receipt: 'gif', note: 'text' },
  { id: 11, payment_date: '01/07/2024', payment: 11500, receipt: 'pdf', note: 'receipt' },
  { id: 12, payment_date: '06/27/2024', payment: 8600, receipt: 'jpeg', note: 'note' },
  { id: 13, payment_date: '09/29/2024', payment: 9900, receipt: 'bmp', note: 'invoice' },
  { id: 14, payment_date: '02/14/2024', payment: 12500, receipt: 'tiff', note: 'text' },
  { id: 15, payment_date: '11/20/2024', payment: 8000, receipt: 'png', note: 'receipt' },
  { id: 16, payment_date: '07/12/2024', payment: 9400, receipt: 'jpg', note: 'note' },
  { id: 17, payment_date: '04/01/2024', payment: 10800, receipt: 'gif', note: 'invoice' },
  { id: 18, payment_date: '08/24/2024', payment: 8200, receipt: 'pdf', note: 'text' },
  { id: 19, payment_date: '03/08/2024', payment: 11200, receipt: 'jpeg', note: 'receipt' },
  { id: 20, payment_date: '10/16/2024', payment: 7600, receipt: 'bmp', note: 'note' }
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        sx={{ fontSize: 14 }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

// v1.2
// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 100 },
//   { field: 'payment_date', headerName: 'Payment Date', width: 180 },
//   {
//     field: 'payment',
//     headerName: 'Payment',
//     type: 'number',
//     width: 150
//   },
//   {
//     field: 'receipt',
//     headerName: 'Receipt',
//     width: 150
//   },
//   {
//     field: 'note',
//     headerName: 'Note',
//     width: 150
//   }
// ];

// const rows = [
//   { id: 1, payment_date: '06/04/2024', payment: 10000, receipt: 'png', note: 'text' },
//   { id: 2, payment_date: '09/15/2024', payment: 7500, receipt: 'jpg', note: 'invoice' },
//   { id: 3, payment_date: '02/28/2024', payment: 12000, receipt: 'pdf', note: 'receipt' },
//   { id: 4, payment_date: '11/11/2024', payment: 8800, receipt: 'gif', note: 'note' },
//   { id: 5, payment_date: '07/30/2024', payment: 9500, receipt: 'jpeg', note: 'invoice' },
//   { id: 6, payment_date: '04/22/2024', payment: 11000, receipt: 'bmp', note: 'text' },
//   { id: 7, payment_date: '08/09/2024', payment: 8300, receipt: 'tiff', note: 'receipt' },
//   { id: 8, payment_date: '03/18/2024', payment: 10500, receipt: 'png', note: 'note' },
//   { id: 9, payment_date: '10/05/2024', payment: 7700, receipt: 'jpg', note: 'invoice' },
//   { id: 10, payment_date: '05/11/2024', payment: 9200, receipt: 'gif', note: 'text' },
//   { id: 11, payment_date: '01/07/2024', payment: 11500, receipt: 'pdf', note: 'receipt' },
//   { id: 12, payment_date: '06/27/2024', payment: 8600, receipt: 'jpeg', note: 'note' },
//   { id: 13, payment_date: '09/29/2024', payment: 9900, receipt: 'bmp', note: 'invoice' },
//   { id: 14, payment_date: '02/14/2024', payment: 12500, receipt: 'tiff', note: 'text' },
//   { id: 15, payment_date: '11/20/2024', payment: 8000, receipt: 'png', note: 'receipt' },
//   { id: 16, payment_date: '07/12/2024', payment: 9400, receipt: 'jpg', note: 'note' },
//   { id: 17, payment_date: '04/01/2024', payment: 10800, receipt: 'gif', note: 'invoice' },
//   { id: 18, payment_date: '08/24/2024', payment: 8200, receipt: 'pdf', note: 'text' },
//   { id: 19, payment_date: '03/08/2024', payment: 11200, receipt: 'jpeg', note: 'receipt' },
//   { id: 20, payment_date: '10/16/2024', payment: 7600, receipt: 'bmp', note: 'note' }
// ];

// export default function DataTable() {
//   return (
//     <div style={{ height: '100%', width: '100%' }}>
//       <DataGrid rows={rows} columns={columns} autoHeight pageSize={5} checkboxSelection />
//     </div>
//   );
// }

//  v1.1

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { alpha } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import TableSortLabel from '@mui/material/TableSortLabel';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
// import Checkbox from '@mui/material/Checkbox';
// import TextField from '@mui/material/TextField';
// import { visuallyHidden } from '@mui/utils';

// function createData(id, payment_date, payment, receipt, note) {
//   return {
//     id,
//     payment_date,
//     payment,
//     receipt,
//     note
//   };
// }

// const rows = [
//   createData(1, '06/04/2024', 10000, 'png', 'text'),
//   createData(2, '09/15/2024', 7500, 'jpg', 'invoice'),
//   createData(3, '02/28/2024', 12000, 'pdf', 'receipt'),
//   createData(4, '11/11/2024', 8800, 'gif', 'note'),
//   createData(5, '07/30/2024', 9500, 'jpeg', 'invoice'),
//   createData(6, '04/22/2024', 11000, 'bmp', 'text'),
//   createData(7, '08/09/2024', 8300, 'tiff', 'receipt'),
//   createData(8, '03/18/2024', 10500, 'png', 'note'),
//   createData(9, '10/05/2024', 7700, 'jpg', 'invoice'),
//   createData(10, '05/11/2024', 9200, 'gif', 'text'),
//   createData(11, '01/07/2024', 11500, 'pdf', 'receipt'),
//   createData(12, '06/27/2024', 8600, 'jpeg', 'note'),
//   createData(13, '09/29/2024', 9900, 'bmp', 'invoice'),
//   createData(14, '02/14/2024', 12500, 'tiff', 'text'),
//   createData(15, '11/20/2024', 8000, 'png', 'receipt'),
//   createData(16, '07/12/2024', 9400, 'jpg', 'note'),
//   createData(17, '04/01/2024', 10800, 'gif', 'invoice'),
//   createData(18, '08/24/2024', 8200, 'pdf', 'text'),
//   createData(19, '03/08/2024', 11200, 'jpeg', 'receipt'),
//   createData(20, '10/16/2024', 7600, 'bmp', 'note')
// ];

// function descendingComparator(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function getComparator(order, orderBy) {
//   return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
// }

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

// // id, , payment, receipt, note
// const headCells = [
//   {
//     id: 'payment_date',
//     numeric: false,
//     disablePadding: true,
//     label: 'Payment Date'
//   },
//   {
//     id: 'paymnet',
//     numeric: false,
//     disablePadding: false,
//     label: 'Paymnet'
//   },
//   {
//     id: 'receipt',
//     numeric: false,
//     disablePadding: false,
//     label: 'Receipt'
//   },
//   {
//     id: 'note',
//     numeric: false,
//     disablePadding: false,
//     label: 'Note'
//   }
// ];

// function EnhancedTableHead(props) {
//   const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
//   const createSortHandler = (property) => (event) => {
//     onRequestSort(event, property);
//   };

//   return (
//     <TableHead>
//       <TableRow>
//         <TableCell padding="checkbox">
//           <Checkbox
//             color="primary"
//             indeterminate={numSelected > 0 && numSelected < rowCount}
//             checked={rowCount > 0 && numSelected === rowCount}
//             onChange={onSelectAllClick}
//             inputProps={{
//               'aria-label': 'select all desserts'
//             }}
//           />
//         </TableCell>
//         {headCells.map((headCell) => (
//           <TableCell key={headCell.id} align={headCell.numeric ? 'right' : 'left'} padding={headCell.disablePadding ? 'none' : 'normal'}>
//             <TableSortLabel
//               active={orderBy === headCell.id}
//               direction={orderBy === headCell.id ? order : 'asc'}
//               onClick={createSortHandler(headCell.id)}
//             >
//               {headCell.label}
//               {orderBy === headCell.id ? (
//                 <Box component="span" sx={visuallyHidden}>
//                   {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                 </Box>
//               ) : null}
//             </TableSortLabel>
//           </TableCell>
//         ))}
//       </TableRow>
//     </TableHead>
//   );
// }

// EnhancedTableHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired
// };

// function EnhancedTableToolbar(props) {
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       sx={{
//         pl: { sm: 2 },
//         pr: { xs: 1, sm: 1 },
//         ...(numSelected > 0 && {
//           bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)
//         })
//       }}
//     >
//       {numSelected > 0 ? (
//         <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
//           Previous Payments
//         </Typography>
//       )}
//       {/* <Tooltip title="Filter list">
//         <IconButton>
//           <FilterListIcon />
//         </IconButton>
//       </Tooltip> */}
//     </Toolbar>
//   );
// }

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired
// };

// export default function EnhancedTable() {
//   const [order, setOrder] = React.useState('asc');
//   const [orderBy, setOrderBy] = React.useState('calories');
//   const [selected, setSelected] = React.useState([]);
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);
//   const [searchValue, setSearchValue] = React.useState('');

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(property);
//   };

//   const handleSelectAllClick = (event) => {
//     if (event.target.checked) {
//       const newSelected = rows.map((n) => n.id);
//       setSelected(newSelected);
//       return;
//     }
//     setSelected([]);
//   };

//   const handleClick = (event, id) => {
//     const selectedIndex = selected.indexOf(id);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, id);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
//     }
//     setSelected(newSelected);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const isSelected = (id) => selected.indexOf(id) !== -1;

//   // filter-------------------------------------------------------------

//   const filteredRows = searchValue ? rows.filter((row) => row.date.toLowerCase().includes(searchValue.toLowerCase())) : rows;

//   const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredRows.length) : 0;

//   const visibleRows = stableSort(filteredRows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
//   // const visibleRows = React.useMemo(
//   //   () => stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
//   //   [order, orderBy, page, rowsPerPage]
//   // );

//   //------------------------------------------------------------//

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Paper sx={{ width: '100%', mb: 2 }}>
//         <EnhancedTableToolbar numSelected={selected.length} />
//         <TextField
//           label="Search by Name"
//           variant="outlined"
//           size="small"
//           value={searchValue}
//           onChange={(e) => setSearchValue(e.target.value)}
//           sx={{ m: 1 }}
//         />
//         <TableContainer>
//           <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={'medium'}>
//             <EnhancedTableHead
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={handleSelectAllClick}
//               onRequestSort={handleRequestSort}
//               rowCount={rows.length}
//             />
//             <TableBody>
//               {visibleRows.map((row, index) => {
//                 const isItemSelected = isSelected(row.id);
//                 const labelId = `enhanced-table-checkbox-${index}`;

//                 return (
//                   <TableRow
//                     hover
//                     onClick={(event) => handleClick(event, row.id)}
//                     role="checkbox"
//                     aria-checked={isItemSelected}
//                     tabIndex={-1}
//                     key={row.id}
//                     selected={isItemSelected}
//                     sx={{ cursor: 'pointer' }}
//                   >
//                     <TableCell padding="checkbox">
//                       <Checkbox
//                         color="primary"
//                         checked={isItemSelected}
//                         inputProps={{
//                           'aria-labelledby': labelId
//                         }}
//                       />
//                     </TableCell>
//                     <TableCell component="th" id={labelId} scope="row" padding="none">
//                       {row.payment_date}
//                     </TableCell>
//                     <TableCell align="left">{row.payment}</TableCell>
//                     <TableCell align="left">{row.receipt}</TableCell>
//                     <TableCell align="left">{row.note}</TableCell>
//                   </TableRow>
//                 );
//               })}
//               {emptyRows > 0 && (
//                 <TableRow
//                   style={{
//                     height: 53 * emptyRows
//                   }}
//                 >
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={filteredRows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//     </Box>
//   );
// }
