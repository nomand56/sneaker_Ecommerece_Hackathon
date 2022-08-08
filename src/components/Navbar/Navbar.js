import * as React from 'react';
import { Typography, Button, Toolbar, Box, AppBar, IconButton, Avatar } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { theme } from "./Style"
import { Link, useNavigate } from 'react-router-dom';
import { showCart } from '../store/cartSlice';
import { useDispatch } from 'react-redux/es/exports';
import sneak from "../assets/sneak.svg"
import { logout } from '../store/authSlice';
import logoutImg from "../assets/logout.png"
export default function Navbar({ token }) {
    let dispatch = useDispatch()

    let Navigate = useNavigate()
    return (
        <div>
            <ThemeProvider theme={theme}>



                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" sx={{ backgroundColor: "white" }}>
                        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                <Button sx={{ mr: 6, }} color="inherit">
                                    <Link to="/" style={{ textDecoration: 'none', color: "black" }} ><img src={sneak} /></Link>
                                </Button>
                                <Button sx={{ mr: 6, }} color="inherit">
                                    <Link to="/" style={{ textDecoration: 'none', color: "black" }} >Home</Link>
                                </Button>
                                <Button sx={{ mr: 6, }} color="inherit">
                                    <Link to="/About" style={{ textDecoration: 'none', color: "black" }} >About</Link>
                                </Button>
                                <Button sx={{ mr: 6, }} color="inherit">
                                    <Link to="/" style={{ textDecoration: 'none', color: "black" }}>
                                        Product</Link>
                                </Button>
                            </Typography>
                            <Box sx={{}}>
                                <Typography sx={{ fontSize: 11 }} variant="body1" component="p">
                                    {console.log(token)}
                                    {token ? null : <Button sx={{ color: "black" }} color="inherit" onClick={() => Navigate("/SignIn")}>Login</Button>}
                                    {token ? null : <Button sx={{ color: "black" }} color="inherit" onClick={() => Navigate("/SignUp")}>SignUp</Button>}

                                    {token ? <Button onClick={() => dispatch(showCart())} sx={{ color: "black" }} color="inherit"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg></Button> : null}
                                    {token ? <Button onClick={() => dispatch(logout())}><img src={logoutImg} height="30" width="30" />  </Button> : null}
                                </Typography>

                            </Box>

                        </Toolbar>
                    </AppBar>
                </Box>
            </ThemeProvider>
        </div>

    );
}