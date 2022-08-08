import React, { useState } from 'react'

import { Container } from '@mui/system';
import { useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import { Box, Button, CardActionArea, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Error from './error';

function Products({ product, setPage }) {

    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // function handleChange() {
    //     setPage(counter)
    // }

    if (!product) {
        return <h1>Loading</h1>
    }
    return (


        <>
    


            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>



                {product.map((item) => {

                    return <Card sx={{ maxWidth: 345, margin: "20px" }}>
                        <CardActionArea  >
                            <CardMedia
                                component="img"

                                image={item.images[0]}
                                alt="green iguana"
                                sx={{
                                    width: "fit-content",
                                    backgroundAttachment: "fixed",
                                    backgroundPosition: "center"

                                }}

                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.price}
                                </Typography>
                                <Link style={{ textDecoration: "none" }} to={`/${item.id}`}>
                                    <Button variant="contained">CART MENU</Button>
                                </Link>


                            </CardContent>
                        </CardActionArea>
                    </Card>


                    // </Box>
                })}

            </Box>


            <div style={{ display: "flex", justifyContent: "center" }}>

                {arr.map((item) => {
                    return <Button onClick={() => setPage(item)}>{item}</Button>
                })
                }
            </div>



        </>


    )
}

export default Products