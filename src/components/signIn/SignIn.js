import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material'
import { useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { loginOK } from '../store/authSlice'
import { useNavigate } from 'react-router'

const SignIn = ({ handleChange }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const paperStyle = { padding: 20, height: '35vh', width: 300, margin: "28px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const initialValues = {
        email: '',
        password: '',

    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().required("Required")
    })
    const onSubmit = (values, props) => {
        console.log(values)

        axios.post("/signin", values).then((response) => {
            const { data } = response;
            // console.log(data)
            if (data.user && data.user.name) {

                dispatch(loginOK(data))
                navigate("/")

            }
        }).catch((err) => {
            console.log(err)
            alert("user not found")

        })

        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

    }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    {/* <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar> */}
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='email' name="email"
                                placeholder='Enter email' fullWidth required
                                helperText={<ErrorMessage name="email" />}
                            />
                            <Field as={TextField} label='Password' name="password"
                                placeholder='Enter password' type='password' fullWidth required
                                helperText={<ErrorMessage name="password" />} />

                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={btnstyle} fullWidth>{props.isSubmitting ? "Loading" : "Sign in"}</Button>

                        </Form>
                    )}
                </Formik>
                <Typography >
                    <Link href="#" >
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography > Do you have an account ?
                    <Link href="#" onClick={() => handleChange("event", 1)} >
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default SignIn