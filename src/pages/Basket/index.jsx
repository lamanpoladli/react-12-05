import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function Basket() {

  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            setPhotos(data)

        })
}, [])
  
  return (

    <TableContainer component={Paper} style={{marginTop:"2%"}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead >
          <TableRow >
            <StyledTableCell>Id:</StyledTableCell>
            <StyledTableCell align="right">Title:</StyledTableCell>
            <StyledTableCell align="right">Price:</StyledTableCell>
            <StyledTableCell align="right">Description:</StyledTableCell>
            <StyledTableCell align="right">Category:</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {photos.map((elem) => (
            <StyledTableRow key={elem.id}>
              <StyledTableCell component="th" scope="row">
                {elem.id}
              </StyledTableCell>
              <StyledTableCell align="right">{elem.title}</StyledTableCell>
              <StyledTableCell align="right">{elem.price}</StyledTableCell>
              <StyledTableCell align="right">{elem.description}</StyledTableCell>
              <StyledTableCell align="right">{elem.category}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}