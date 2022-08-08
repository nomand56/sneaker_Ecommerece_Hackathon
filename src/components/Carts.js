import { Box, Typography } from '@mui/material'
import React from 'react'

import { useSelector } from 'react-redux/es/hooks/useSelector';
function Carts() {
    const state = useSelector((state) => state.cart.items)
    console.log(state)

    return (
        <Box sx={{
            backgroundColor: "#fafafa", position: "absolute", height: "100vh", width: "15vw", top: "65px", right: 0, boxShadow: "-17px -15px 190px 56px rgba(240,240,240,1)", borderRadius: "5px"
        }}>
            <Box sx={{ display: "flex", justifyContent: "center" }
            } >

                <Typography sx={{
                    fontSize: "x-large",
                    fontFamily: "cursive"
                }} variant="h6" component="div"> CART  </Typography>
            </ Box>
            {state.map((item) => {

                return <Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", border: "1px solid lightgray", padding: "4px" }}>
                        <Box>
                            <img src={item.img} height="55" width="50" />
                        </Box>
                        <Box>


                            <Typography variant="p" sx={{
                                // fontSize: "x-large",
                                fontFamily: "cursive",
                                display: "block",
                                fontSize: "inherit"
                            }}   >
                                {item.title}

                            </Typography>
                            <Typography variant="p" sx={{
                                // fontSize: "x-large",
                                fontFamily: "cursive",
                                // fontSize: "inherit"
                            }}   >
                                {item.price * item.quantity}

                            </Typography>
                        </Box>
                    </Box>


                </Box>
            })}
        </Box >
    )
}

export default Carts