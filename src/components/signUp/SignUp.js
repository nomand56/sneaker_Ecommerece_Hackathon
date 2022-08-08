import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router'

const SignUp = ({ handleChange }) => {
    let Navigate = useNavigate()
    const paperStyle = { padding: 20, height: '73vh', width: 400, margin: "28px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const initialValues = {
        email: '',
        password: '',
        name: '',
        role: '',
        avatar: ''

    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().required("Required"),
        name: Yup.string().required("Required"),
        role: Yup.string().required("Required"),
        avatar: Yup.string().required("Required")


    })
    const onSubmit = (values, props) => {
        console.log(values)
        // setSignUp(values)


        axios.post('/signup', values).then((response) => {
            toast('You have successfully Created Your accounr!', response, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }).catch((error) => {
            toast.error('Something went wrong, please try again later.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        })
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
            Navigate("/signIn")

        }, 2000)

    }
    return (
        <Grid>
            <ToastContainer
                theme="dark"
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Paper style={paperStyle}>
                <Grid align='center'>
                    {/* <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar> */}
                    <h2>Sign Up</h2>
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

                            <Field as={TextField} label='name' name="name"
                                placeholder='Enter name' type='text' fullWidth required
                                helperText={<ErrorMessage name="name" />} />



                            <Field as={TextField} label='role' name="role"
                                placeholder='Enter role' type='text' fullWidth required
                                helperText={<ErrorMessage name="role" />} />


                            <Field as={TextField} label='avatar' name="avatar"
                                placeholder='Enter avatar LINK' type='upload' fullWidth required
                                helperText={<ErrorMessage name="avatar" />} />


                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={btnstyle} fullWidth>Sign Up</Button>

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

export default SignUp