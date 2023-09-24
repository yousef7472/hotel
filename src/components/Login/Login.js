import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext"
import { TextField, Button, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"
import "./Design.css"
import HeadTitle from "../../common/HeadTitle/HeadTitle"
import { useRef, useState } from "react";


const Login = () => {
  const [error, setError] = useState()
  const { login } = useAuth()
  const history = useNavigate()

  const {handleSubmit, register, formState: { errors }} = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async(data, e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await login(email, password)
      history("/dashboard")
    } catch {
      setError("Incorrect username or password.")
    }

  };

  return (
    <>
      <HeadTitle />
      <section className='forms top'>
        <div className='container'>
          <div className='sign-box'>
            <p>Enter your e-mail and password below to log in to your account and use the benefits of our website.</p>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Stack spacing={2} width={400}>
                  {error && <div className="error">{error}</div>}
                  <TextField
                    label="Email"
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    error={!!errors.email}
                  />
                  <p className="error">{errors.email?.message}</p>
                  <TextField type="password"
                 label="Password" 
                 id="password" {...register("password", {required: "password is required" })} 
                  error={!!errors.password}
                    />
                    <p className="error">{errors.password?.message} </p>
                  <Button type="submit" variant="contained" color="success">
                    Login
                  </Button>
                  <p> Forgot Password? <Link to='/forgot'>Reset it</Link></p>
                </Stack>
                <p> Don't have account? <Link to='/register'>Signup!</Link></p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login