import Image from 'next/image';

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Hero from "../../components/header/hero";
import Featuredstories from "../../components/featured/stories";
import Facebookstories from "../../components/facebook/stories";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from 'react'; 



export default function Home() {
  


  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState([]);
  

    
  useEffect(() => {
    async function fetchData2() {
      try {
        const response = await fetch( 'https://content.elections.info.gov.pg/wp-json/wp/v2/posts?_embed'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const apiData = await response.json();
        console.log(apiData);
        setPosts(apiData );  

      } catch (error) {
        console.error('Error fetching posts data:', error);
       
      }
    }

    fetchData2();
  }, []);

  return (
    <>

<Hero picturePath={ "/rectangle-7@2x.png"} title={''} />
    <Box className='body'>
      <Container maxWidth="lg">
        <Grid container spacing={5}>{/**-------------------featured stories---------------------- */}

          <Grid item sm={12} md={8}>
          <Box className='stories-div'>

              <Box className='left-text'><Typography variant="h6" color="steelblue"  gutterBottom>Featured Stories</Typography></Box>

              <Featuredstories post={posts}/>
              
            
          </Box>
          </Grid>
          <Grid item sm={12} md={4}>{/**-------------------facebook stories---------------------- */}
          <Box className='stories-div'>
            <Box className='left-text'><Typography variant="h6" color="steelblue"  gutterBottom>Latest on Facebook</Typography></Box>
            <Facebookstories/>
          </Box>

          <Box className='social-media'>
            <Box className='social-title centered-text'>
            <Typography variant="h6" color="steelblue"  gutterBottom>
            SHARE THIS PAGE
            </Typography>
            </Box>
            <Box className='social-flexbox'>
                  <Box className='social-icons'>   <img className=" w-full h-full object-cover" alt="" src="/rectangle-11@2x.png" /></Box>
                  <Box className='social-icons'>   <img className=" w-full h-full object-cover" alt="" src="/rectangle-13@2x.png" /></Box>
                  <Box className='social-icons'>   <img className=" w-full h-full object-cover" alt="" src="/rectangle-14@2x.png" /></Box>
                  <Box className='social-icons'>   <img className=" w-full h-full object-cover" alt="" src="/rectangle-11@2x.png" /></Box>
            </Box>         
          </Box>


          </Grid>         
        </Grid>
      </Container>
    </Box> 
    
 
    
    </>
  )
}







