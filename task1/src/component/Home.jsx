import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddEntry from './AddEntry';
import axios from 'axios';
import { AiFillDelete } from 'react-icons/ai';
import EditEmpDetail from './EditEmpDetail';
import { FaEdit } from 'react-icons/fa';
import loadingImg from "./images/loading.gif"

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

export default function Home() {
  const [empList, setEmpList] = React.useState([]);
  const [selectedRow, setSelectedRow] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false)

  async function getData(){
    setIsLoading(true)
    await axios.get("https://tericsoft-fake-backend.onrender.com/employee")
      .then((res)=>{
        setEmpList(res.data)
        setIsLoading(false)
      })
      .catch((e)=>{
        console.log(e);
      })
  }

  const handleDelete = async(id)=>{
    setIsLoading(true)
    await axios.delete(`https://tericsoft-fake-backend.onrender.com/employee/${id}`)
      .then((res)=>{
        getData()
        setIsLoading(false)
      })
      .catch((e)=>console.log(e))
  }

  const handleEditClick = (row) => {
    setSelectedRow(row);
  }

  React.useEffect(()=>{
    getData()
  },[])

  if(isLoading){
    return <img src={loadingImg} alt="loadingImg"/>
  }else{
    
    return (
      <TableContainer component={Paper}>
        <AddEntry setIsLoading={setIsLoading} getData={getData}/>
        {selectedRow && <EditEmpDetail setIsLoading={setIsLoading} getData={getData} row={selectedRow} onClose={() => setSelectedRow(null)} />}
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>DOB</StyledTableCell>
              <StyledTableCell>Gender</StyledTableCell>
              <StyledTableCell>Hobbies</StyledTableCell>
              <StyledTableCell>Edit</StyledTableCell>
              <StyledTableCell>Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {empList.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell>{row.email}</StyledTableCell>
                <StyledTableCell>{row.phone}</StyledTableCell>
                <StyledTableCell>{row.dob}</StyledTableCell>
                <StyledTableCell>{row.gender}</StyledTableCell>
                <StyledTableCell>{row.hobbies.map((el)=><p>{el}</p>)}</StyledTableCell>
                <StyledTableCell sx={{cursor:"pointer"}} onClick={() => handleEditClick(row)}>{<FaEdit size={25}/>}</StyledTableCell>
                <StyledTableCell sx={{cursor:"pointer"}}>{<AiFillDelete onClick={()=>handleDelete(row.id)} size={25}/>}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

}