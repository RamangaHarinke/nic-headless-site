import React, { useEffect, useState } from 'react'; 
import Hero from "../../components/header/hero";
import PressList  from "../../components/featured/pressNotice";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

export default function(){
    const [posts, setPosts] = useState([]); 

    useEffect(() => {
        async function fetchData2() {
          try {
            const response = await fetch( 'https://content.elections.info.gov.pg/wp-json/wp/v2/posts'); // Replace with your API endpoint
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const apiData = await response.json();
    
            let firstPost; // Declare a variable to store the first post
            setPosts(apiData );
    
       
    
          } catch (error) {
            console.error('Error fetching posts data:', error);
            //setIsLoading(false);
          }
        }
    
        fetchData2();
      }, []);
    
    return(
        <>      
         <Hero picturePath={ "/dept-sec.png"} title={'Press Release'} />
         <Box className='body'>
         <Container maxWidth="lg">
         <Grid container spacing={0}>
                <Grid item sm={6} md={8}>
                    <Box className='stories-div'>

                  
                    <PressList post={posts}/>

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