import React, { useState, useEffect } from "react";
import Navbar from "../List/Header";
import Copyright from "../List/Footer";
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Container, IconButton, TableFooter, TablePagination, Button } from "@mui/material";
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';


import { useDispatch } from "react-redux";
import { addtoCart } from "../../redux/cartSlice";


import AddIcon from '@mui/icons-material/Add';




function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function Main() {

  const [data, setData] = useState([]);

  //set paginazione
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const API = `https://jsonplaceholder.typicode.com/posts?_page=${page + 1}&_limit=${rowsPerPage}`;

  useEffect(() => {
    fetch(API)
      .then((res) => {
        return res.json();
      })
      .then((response) => setData(response)).catch(error => console.error('Qualcosa è andato storto' + error));
  },
    [page, rowsPerPage]
  );
  console.log(data);

  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>
        <Navbar />

      </div>




      <Box sx={{ minHeight: 470 }}>

        <Container sx={{ p: 3 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="custom pagination table">
              <TableHead sx={{ backgroundColor: '#ff8a65' }}>
                <TableRow>
                  <TableCell sx={{ width: 0 }}>userId</TableCell>
                  <TableCell align="center">Id</TableCell>
                  <TableCell align="center">Title</TableCell>
                  <TableCell align="center">Body</TableCell>
                  <TableCell align="center">Aggiungi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                {(data).map((data) => (
                  <TableRow
                    key={data.id}

                  >
                    <TableCell>{data.userId}</TableCell>
                    <TableCell component="th" scope="row" sx={{ backgroundColor: '#ffd180' }}>
                      {data.id}
                    </TableCell>
                    <TableCell align="right" sx={{ backgroundColor: '#fff176' }}>{data.title}</TableCell>
                    <TableCell align="right" sx={{ backgroundColor: '#ffd180' }}>{data.body}</TableCell>
                    <TableCell align="center"><Button onClick={() => dispatch(addtoCart(data))}><AddIcon /></Button></TableCell>


                  </TableRow>
                ))}

              </TableBody>


            </Table>

            <TableFooter>

              <TablePagination
                sx={{ width: '100%' }}
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={125}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />

            </TableFooter>
          </TableContainer>
        </Container>
      </Box>



      <Copyright />
    </div>



  );

}
export default Main;

