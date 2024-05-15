import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { visuallyHidden } from '@mui/utils';
import MenuItem from '@mui/material/MenuItem';

function createData(id, name, nic, email, telephone, tenant_hostel, payment_receipt, payment) {
  return {
    id,
    name,
    nic,
    email,
    telephone,
    tenant_hostel,
    payment_receipt,
    payment
  };
}

const rows = [
  createData(1, 'Ella Johnston', '972816543v', 'ella.johnston@example.com', '0714567890', 'Oceanic', 'png'),
  createData(2, 'Isaac Murray', '886734982v', 'isaac.murray@example.com', '0771234567', 'Sunrise'),
  createData(3, 'Mia Patel', '785243679v', 'mia.patel@example.com', '0765432198', 'Seashell'),
  createData(4, 'Oscar Thompson', '590128374v', 'oscar.thompson@example.com', '0723456789', 'Wavecrest'),
  createData(5, 'Layla Wright', '394856712v', 'layla.wright@example.com', '0789012345', 'Marina'),
  createData(6, 'Luke Harris', '653928147v', 'luke.harris@example.com', '0798765432', 'Aquatic'),
  createData(7, 'Maya Rodriguez', '472615893v', 'maya.rodriguez@example.com', '0709876543', 'Tidepool'),
  createData(8, 'Ethan Garcia', '238945671v', 'ethan.garcia@example.com', '0754321098', 'Lagoon'),
  createData(9, 'Ava Martinez', '823764915v', 'ava.martinez@example.com', '0732109876', 'Seabreeze'),
  createData(10, 'Oliver Smith', '190837465v', 'oliver.smith@example.com', '0743210987', 'AquaBliss'),
  createData(11, 'Sophia Brown', '746392810v', 'sophia.brown@example.com', '0798765432', 'BlueHorizon'),
  createData(12, 'Mason Wilson', '892374561v', 'mason.wilson@example.com', '0712345678', 'Sunset'),
  createData(13, 'Emma Jones', '673985421v', 'emma.jones@example.com', '0787654321', 'Coralbay'),
  createData(14, 'William Taylor', '583920174v', 'william.taylor@example.com', '0765432198', 'Islandside'),
  createData(15, 'Charlotte Clark', '320985647v', 'charlotte.clark@example.com', '0701234567', 'Surfsands'),
  createData(16, 'James White', '492613875v', 'james.white@example.com', '0756789012', 'Waveshore'),
  createData(17, 'Harper Lee', '764102839v', 'harper.lee@example.com', '0723456789', 'Sandcastle'),
  createData(18, 'Aiden Turner', '819367245v', 'aiden.turner@example.com', '0743210987', 'Seaview'),
  createData(19, 'Evelyn Thomas', '276541893v', 'evelyn.thomas@example.com', '0776543210', 'Palmgrove'),
  createData(20, 'Jackson Walker', '639284715v', 'jackson.walker@example.com', '0732109876', 'Coastline')
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Tenant Name'
  },
  {
    id: 'nic',
    numeric: false,
    disablePadding: false,
    label: 'NIC'
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email'
  },
  {
    id: 'telephone',
    numeric: false,
    disablePadding: false,
    label: 'Telephone'
  },
  {
    id: 'tenant_hostel',
    numeric: false,
    disablePadding: false,
    label: 'Tenant Hostel'
  },
  {
    id: ' payment_receipt',
    numeric: false,
    disablePadding: false,
    label: ' Payement Receipt'
  },
  {
    id: 'payment',
    numeric: false,
    disablePadding: false,
    label: 'Payment'
  }
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts'
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align={headCell.numeric ? 'right' : 'left'} padding={headCell.disablePadding ? 'none' : 'normal'}>
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity)
        })
      }}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
          Finance Overview
        </Typography>
      )}
      {/* <Tooltip title="Filter list">
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip> */}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchValue, setSearchValue] = React.useState('');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // filter-------------------------------------------------------------

  const filteredRows = searchValue ? rows.filter((row) => row.name.toLowerCase().includes(searchValue.toLowerCase())) : rows;

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredRows.length) : 0;

  const visibleRows = stableSort(filteredRows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  //------------------------------------------------------------//

  // Define options for the payment select field
  const paymentOptions = ['Paid', 'Pending'];

  // Render payment select field
  const renderPaymentSelect = (row) => {
    return (
      <TextField
        select
        value={row.payment}
        onChange={(e) => {
          const newValue = e.target.value;
          // Update the payment value in the row
          const updatedRow = { ...row, payment: newValue };
          // Update the row in the state or wherever you store your data
          // For demonstration, let's just log the updated row
          console.log(updatedRow);
        }}
        fullWidth
      >
        {paymentOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    );
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TextField
          label="Search by Name"
          variant="outlined"
          size="small"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          sx={{ m: 1 }}
        />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={'medium'}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId
                        }}
                      />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row" padding="none">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.nic}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.telephone}</TableCell>
                    <TableCell align="left">{row.tenant_hostel}</TableCell>
                    <TableCell align="left">{row.payment_receipt}</TableCell>
                    <TableCell align="left">{renderPaymentSelect(row)}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
