import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Checkbox, FormLabel, Input, Radio, RadioGroup } from '@mui/material';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';

// give style to the Modal Box
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// give style to the input fields used in Modal Box
const inputStyle = {
  display: "block",
  width: "54%",
  margin:'auto',
  marginBottom: "10px" 
}


export default function EditEmpDetail({setIsLoading, getData, row, onClose}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [form, setForm] = React.useState(row)
  const [checkboxes, setCheckboxes] = React.useState([]);
  
  //function to handle the change in the name, email, phone, date and gender radio input fields.
  const handleChange = (e)=>{
    const {name, value} = e.target; //getting the name and value from the event
    
    setForm({ //updating the form value
      ...form,
      [name]: value
    });
  }

  //function to handle the change in the checkbox
  function handleCheckboxChange(event) {
    const { value } = event.target;
    let updatedCheckboxes = [...checkboxes];

    if (updatedCheckboxes.includes(value)) {
      updatedCheckboxes = updatedCheckboxes.filter(item => item !== value);
    } else {
      updatedCheckboxes.push(value);
    }

    setCheckboxes(updatedCheckboxes);
    form.hobbies = updatedCheckboxes;
  }

  //function to handle the update button and responsible to PATCH the selected row
  const handleSubmit = async(e)=>{
    e.preventDefault();
    // Sets isLoading to true before deleting the record
    setIsLoading(false)

    await axios({
      // Sends a PATCH request to the specified endpoint using axios
      url: `https://tericsoft-fake-backend.onrender.com/employee/${row.id}`,
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8"
      },
      data: form
    })
      .then((res) => {
        // Calls getData() to refresh the employee list after the record has been deleted
        getData();
        // Sets isLoading to false after the record has been deleted
        setIsLoading(true);
      })
      .catch((e) => {
        // alert any errors that occur during the GET request
        alert("something went wrong, try after 30 secs")
        console.log(e);
      });
      
    onClose(); //make the setSelected null again to remove edit icon from home screen
    setCheckboxes([]); 
  }

  //function to make the setSelected null again to remove edit icon from home screen
  const handleCancel = () => {
    onClose();
  }

  return (
    <div>
      {/* import react icon from react-icon */}
      <Button onClick={handleOpen} variant="outlined" sx={{marginBottom: "10px"}}><FaEdit size={20}/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography sx={{
          fontFamily:'cursive',
          color: 'red',
          fontSize:'25px',
          textAlign:'center'
        }}>Edit Employee Details</Typography>

          {/* Name field */}
          <Box sx={{display:'flex'}}>
            <FormLabel sx={{mt:'10px'}}>Name</FormLabel>
            <Input
              type='text' 
              name='name'
              value={form.name}
              onChange={handleChange}
              sx={inputStyle}
            />
          </Box>

          {/* Email field */}
          <Box sx={{display:'flex'}}>
            <FormLabel sx={{mt:'10px'}}>Email</FormLabel> 

            <Input
              type='email' 
              name='email'
              value={form.email}
              onChange={handleChange}
              sx={inputStyle}
            />
          </Box>

          {/* Phone No. field */}
          <Box sx={{display:'flex'}}>
            <FormLabel sx={{mt:'10px'}}>Phone No.</FormLabel>
            <Input
              type='text' 
              name='phone'
              value={form.phone}
              onChange={handleChange}
              sx={{ml:'35px', width:'55%', mb:'10px'}}
              
            />
          </Box>

          {/* Date of birth picker field */}
          <Box sx={{display:'flex'}}>
            <FormLabel sx={{mt:'10px'}}>DOB</FormLabel>
            <Input
              type='date' 
              name='dob'
              value={form.dob}
              onChange={handleChange}
              sx={inputStyle}
            />
          </Box>

          {/* Radio field to select the gender */}
          <RadioGroup onChange={handleChange} name="gender" sx={{ my: 1 }}>
          <Typography level="h3">Gender</Typography>
            <Box sx={{display: 'block'}}>
              <Radio
                value="female"
                label="Female"
              />
              <FormLabel>Female</FormLabel>
            </Box>

            <Box sx={{display: 'block'}}>
              <Radio value="male" label="Male" />
              <FormLabel>Male</FormLabel>
            </Box>

            <Box sx={{display: 'block'}}>
              <Radio value="other" label="Other" />
              <FormLabel>Other</FormLabel>
            </Box>
          </RadioGroup>

          {/* Checkbox fields to select hobbies */}
          <Box sx={{ display: 'flex', gap: 3 }}>
          <Typography sx={{mt:'10px'}}>Hobbies</Typography>
            <Box>
              <Checkbox name='hobbies' value={'Reading'} onChange={handleCheckboxChange}/>
              <FormLabel>Reading</FormLabel>
            </Box>

            <Box>
              <Checkbox name='hobbies' value={'Writing'} onChange={handleCheckboxChange}/>
              <FormLabel>Writing</FormLabel>
            </Box>

          </Box>

          {/* Button to PATCH row and update in backend */}
          <Button sx={inputStyle} onClick={handleSubmit}>Update</Button>

          {/* Button to make the setSelected null again to remove edit icon from home screen */}
          <Button sx={inputStyle} onClick={handleCancel}>Cancle</Button>
          
        </Box>
      </Modal>
    </div>
  );
}