import Hero from "../../components/header/hero";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box , TextField , Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import NewsList  from "../../components/featured/news";

export default function(){
    return(
        <>        
        <Hero picturePath={ "/contact.png"} title={'Contact Us'} />
        <Box className='body'>
      <Container maxWidth="lg">
        <Grid container spacing={5}>{/**------------------right side---------------------- */}

          <Grid item sm={12} md={8}>
          <Box className='stories-div'>

        
        <form className=" contact-form">
        <h2> Have a Question? Talk to us</h2>
        <br/><br/><br/>
            <label htmlFor="name">Name:</label><br />        
            <TextField id="outlined-basic" 
                           name="name" 
                           type="text" 
                           size="small" 
                           label="" 
                           variant="outlined"/><br /><br />
            <label htmlFor="name">Email:</label><br />
            <TextField id="outlined-basic" 
                           name="name" 
                           type="text" 
                           size="small" 
                           label="" 
                           variant="outlined"/><br /><br />
            <label htmlFor="name">Phone:</label><br />
            <TextField id="outlined-basic" 
                           name="name" 
                           type="text" 
                           size="small" 
                           label="" 
                           variant="outlined"/><br /><br />
           

            <label htmlFor="message">Message:</label><br />
            <textarea
                name="message"
                id="message"
                cols="30"
                rows="4"
                style={{ border: '1px solid black'}}        
            ></textarea><br /><br />

            <Button variant="contained" size="small" type='submit' style={{ backgroundColor: 'skyblue'}} >Submit Questions
            </Button>
        </form>

          </Box>
          </Grid>
          <Grid item sm={12} md={4}>{/**------------------left side---------------------- */}
          <Box className='stories-div'>
               
          </Box>


          </Grid>         
        </Grid>
      </Container>
    </Box> 
    
       
            
       
        </>
    );
   
}