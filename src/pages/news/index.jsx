import Hero from "../../components/header/hero";
import NewsList  from "../../components/featured/news";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";


export default function(){
    return(
        <>
        <Hero picturePath={ "/sec-pic.jpg"} title={'News'} />
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