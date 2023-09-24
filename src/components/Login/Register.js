import { useEffect, useState, useRef } from "react"
import {useNavigate} from "react-router-dom"
import "./Design.css"
import HeadTitle from "../../common/HeadTitle/HeadTitle"
import { useForm } from "react-hook-form"
import { Stack, TextField, Button } from "@mui/material"
import { MuiTelInput } from 'mui-tel-input'
import Swal from 'sweetalert2'
import { AuthProvider, useAuth } from "../../context/AuthContext"

const Register = () => {

  const [num, setNum] = useState('+20')
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [formErrors, setFormErrors] = useState(true);
  const { signup } = useAuth()
  const navigate = useNavigate()

  const form = useForm({
    defaultValues: {
      Username: "",
      Email: "",
      Password: "",
      ConfirmPassword: ""
    }
  });
  
  const {register, control, handleSubmit, formState, setValue, reset} = form;
  const {errors} = formState;
  
  const onSubmit = (data, e) => {
    e.preventDefault()
    const email = e.target.Email.value;
    const password = e.target.Password.value;
    if (data.Password !== data.ConfirmPassword) {
      setPasswordsMatch(false)
      return;
    }
    else{
      setPasswordsMatch(true);
      signup(email, password)
      console.log(email, password);
      navigate('/sign');
      Swal.fire(
        'Thanks For Registering!',
       'Your registration has been successful.',
        'success'
      )      
      return reset()
    }
};

  const handleChange = (newValue) => {
    setNum(newValue)
  }

useEffect(() =>{
  if (errors.Username || errors.Email || errors.Password) {
    setFormErrors(true)
  }
  else{
    setFormErrors(false)
  }
})
  return (
    <>
  <AuthProvider>
      <HeadTitle />
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Don't have an account? Create your account, it takes less than a minute.</p>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={2} width={400}>
              <TextField 
                type="text" 
                label="Username" 
                onChange={(e) => setValue("Username", e.target.value)}
                id="username" {...register("Username", {
                required: {
                  value: true,
                  message: "Username is required"
                }
                })} placeholder="Type user name"/>
              <p className="error">{errors.Username?.message}</p>

              <TextField
                type="email"
                label="Email"
                id="email"
                {...register("Email", {
                  required: "Email is required",
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Invalid email format",
                  },
                  validate: {
                    notAdmin: (fieldValue) => {
                      return (
                        fieldValue !== "admin@example.com" ||
                        "Enter a different email adress"
                      )
                    },
                    notBlackListed: (fieldValue) => {
                      return (!fieldValue.endsWith('baddomain.com') || "This domain is not supported")
                    }
                  }
                })}
                placeholder="Type your email"
              />
                <p className="error">{errors.Email?.message}</p>

                <MuiTelInput value={num} onChange={handleChange} />
                 
                 <TextField type="password"
                 label="Password"
                 id="Password"
                 onChange={(e) => setValue("Password", e.target.value)}
                  {...register("Password", {
                  required: "Password is required",
                   pattern: { 
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/, 
                    message: "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number", 
                    }, 
                  })} 
                    />
              <p className="error">{errors.Password?.message}</p>
              
                <TextField type="password"
                    label="Confirm Password"
                    onChange={(e) => setValue("ConfirmPassword", e.target.value)}
                    id="ConfirmPassword"
                    {...register("ConfirmPassword", {
                      required: "Confirm password is required",
                    })}
                />
              <p className="error">{errors.ConfirmPassword?.message}</p>
              {!passwordsMatch ? <p className="error">Passwords do not match.</p> : ''}

                <Button type="submit" disabled={formErrors} variant="contained" color="success">
                    Submit
                </Button>
                
              </Stack>
            </form>
          </div>
        </div>
      </section>
      </AuthProvider>
    </>
  )
}

export default Register