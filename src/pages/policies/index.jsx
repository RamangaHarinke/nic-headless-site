import Hero from "../../components/header/hero";
import NewsList  from "../../components/featured/news";
import Container from "@mui/material/Container";
import { Box , Grid } from "@mui/material";

export default function(){
    return(
        <>
         <Hero picturePath={ "/policies.png"} title={'Other Policies'} />
        
        <Box className='body'>
         <Container maxWidth="lg">
         <Grid container spacing={0}>
                <Grid item sm={6} md={8}>
                    <Box className='stories-div'>

                  
                    <NewsList/>

                    </Box>
                </Grid>
                <Grid item sm={6} md={4}>
               
                        

                </Grid>
          

        
        </Grid>

        
        </Container>
        </Box>
        
        </>
    );
}