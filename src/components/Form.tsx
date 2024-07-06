import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormLabel } from '@mui/material';
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';



type FormValues = {
  Name: string;
  PhoneNumber: string;
  Email: string;
};

const Form: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    localStorage.setItem("userData", JSON.stringify(data))
    navigate("/json")
  }
  return (
    <div>
      <Container maxWidth="sm">
        <Box
          height="auto"
          width={400}
          my={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ border: '2px solid grey' }}
        >
          <h1>Fill Details</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={4}
              p={2}
            >
              <div>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <FormLabel>Name</FormLabel>
                  <TextField size='small' type="text" {...register("Name", { required: true })}></TextField>
                </Box>
              </div>
              <div>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <FormLabel>Phone Number</FormLabel>
                  <TextField size='small' type="tel" {...register("PhoneNumber",
                    {
                      required: true,
                      pattern: /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/
                    })}></TextField>
                </Box>
              </div>
              <div>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <FormLabel>Email</FormLabel>
                  <TextField size='small' type="email" {...register("Email",
                    {
                      required: true,
                      pattern: /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/
                    })}></TextField>
                </Box>
              </div>
              <div>
                <Button type='submit'>Submit</Button>
              </div>
            </Box>
          </form>
        </Box>
      </Container>
    </div>
  )
}

export default Form