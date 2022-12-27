import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'Batch_No', label: 'Batch No', minWidth: 170 }, 
  { id: 'Branch_Code', label: 'Branch Code', minWidth: 170 }, 
  { id: 'Product_Code', label: 'Product Code', minWidth: 170 },  
  { id: 'Application_ID', label: 'Application ID', minWidth: 170 },  
  { id: 'Meeting_Center_Name', label: 'Meeting Center Name', minWidth: 170 },  
  { id: 'Meeting_Center_Leader_ID', label: 'Meeting Center Leader ID', minWidth: 170 },  
  { id: 'Alternate_Meeting_Center', label: 'Alternate Meeting Center', minWidth: 170 },  
  { id: 'Action', label: 'Action', minWidth: 170 },  
];

function createData(Batch_No, Branch_Code, Product_Code, Application_ID, Meeting_Center_Name,Meeting_Center_Leader_ID,Alternate_Meeting_Center,Action) {
  
  return { Batch_No, Branch_Code, Product_Code, Application_ID, Meeting_Center_Name,Meeting_Center_Leader_ID,Alternate_Meeting_Center,Action};
}

const rows = [
  createData('B21711294202225549', '3019', 894, 3287263,"OracExistng",4585,"SSL House","action"), 
  createData('B21711294202225549', '3019', 894, 3287263,"OracExistng",4585,"SSL House","action"), 
  createData('B21711294202225549', '3019', 894, 3287263,"OracExistng",4585,"SSL House","action"), 
  createData('B21711294202225549', '3019', 894, 3287263,"OracExistng",4585,"SSL House","action"), 
  createData('B21711294202225549', '3019', 894, 3287263,"OracExistng",4585,"SSL House","action"), 
  createData('B21711294202225549', '3019', 894, 3287263,"OracExistng",4585,"SSL House","action"), 
  createData('B21711294202225549', '3019', 894, 3287263,"OracExistng",4585,"SSL House","action"), 
  createData('B21711294202225549', '3019', 894, 3287263,"OracExistng",4585,"SSL House","action"), 
  createData('B21711294202225549', '3019', 894, 3287263,"OracExistng",4585,"SSL House","action"), 
  createData('B21711294202225549', '3019', 894, 3287263,"OracExistng",4585,"SSL House","action"), 
  createData('B21711294202225549', '3019', 894, 3287263,"OracExistng",4585,"SSL House","action"), 
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead> 
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 0, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}