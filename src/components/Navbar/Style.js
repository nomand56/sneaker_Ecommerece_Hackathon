import {createTheme} from "@mui/material"


export const theme= createTheme({
components:{
    MuiTypography:{
        variants:[
            {
                props:{
                    variant:"body2",
                },

                style:{
                    margin:3,
                    marginTop:7,
                    fontSize:11,
                },
                
            },
            {
                props:{
                    variant:"h3"
                },
                style:{
                        fontFamily: '-apple-system',
                        
                }

            }
        ]
    }
   
}
})