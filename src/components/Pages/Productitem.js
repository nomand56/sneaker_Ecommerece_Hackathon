import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import { addToCart } from "../store/cartSlice";
import { useDispatch } from 'react-redux/es/exports';

function Productitem({ product }) {
    const [cartData, setCartData] = useState()
    const [quantity, setQuantity] = useState()
    let dispatch = useDispatch()

    const { id } = useParams()
    console.log("prod", product)
    if (!product) {
        return <h1>Loading ........</h1>
    }

    let dynamoData = product.filter((item) => item.id == id)
    return (<div>

        <Grid container spacing={2}>


            <Grid item xs={6}>



                <Box sx={{ marginLeft: 2 }}>
                    <img style={{ marginTop: 20 }} height={500} src={dynamoData[0].images[1]} />
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box>

                    <Typography variant="h4" component="p">

                        {dynamoData[0].title}
                    </Typography>
                    <Typography variant="span" component="p">

                        <div>


                            <strong> Description:</strong>
                            {dynamoData[0].description}

                        </div>
                    </Typography>
                    <h6>

                        <strong>
                            ${dynamoData[0].price}
                        </strong>
                    </h6>
                    <button className="snipcart-add-item"
                        data-item-id={dynamoData[0].id}
                        data-item-image={dynamoData[0].images[1]}
                        data-item-name={dynamoData[0].title}
                        data-item-price={dynamoData[0].price}
                    >ADD TO CART</button>

                </Box>
            </Grid>
        </Grid>

        <div style={{ display: "flex", justifyContent: "center" }}></div>


    </div>






    )
}

export default Productitem