import React, { useState } from 'react'
import XLSX from 'xlsx';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import SaveIcon from '@mui/icons-material/Save';

import { Container } from './style'

const PaymentMethod = () => {

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
  
  

  const [ dataList, setDattaList ] = useState(JSON.parse(localStorage.getItem("paymentList")))

  console.log(dataList, "code");

  
  // ----------------------export Excel----------------

  
  const downloadExcel=()=>{
  
    const workSheet=XLSX.utils.json_to_sheet(dataList)
    const workBook=XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workBook,workSheet,"kredit")
    //Buffer
    let buf=XLSX.write(workBook,{bookType:"xlsx",type:"buffer"})
    //Binary string
    XLSX.write(workBook,{bookType:"xlsx",type:"binary"})
    //Download
    XLSX.writeFile(workBook,"Kredit_Data.xlsx")


  }
 
  // ----------------------export Excel----------------



  return (
    <Container>
      <Box>
        <Button
          size='large'
          color="success"
          onClick={downloadExcel}
          startIcon={<SaveIcon />}
          variant="outlined"
        >
          Export to Excel
        </Button>
    </Box>
    <br/>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" >
        <TableHead>
          <TableRow>
            <StyledTableCell align="start">Oy</StyledTableCell>
            <StyledTableCell align="center">Asosiy qarzning qoldig'i</StyledTableCell>
            <StyledTableCell align="center">Asosiy qarz bo'yicha to'lov</StyledTableCell>
            <StyledTableCell align="center">Foizlarni to'lash</StyledTableCell>
            <StyledTableCell align="center">To'lovning umumiy miqdori</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataList.map((value, idx) => (
            <StyledTableRow key={idx}>
              <StyledTableCell component="th" scope="row">
                {idx+1}
              </StyledTableCell>
              <StyledTableCell align="center">{value.total}</StyledTableCell>
              <StyledTableCell align="center">{value.qarz}</StyledTableCell>
              <StyledTableCell align="center">{value.foiz}</StyledTableCell>
              <StyledTableCell align="center">{value.monthlyAmount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  )
}

export default PaymentMethod