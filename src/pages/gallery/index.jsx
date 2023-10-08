
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Hero from "../../components/header/hero";
import NewsList  from "../../components/featured/news";
import Container from "@mui/material/Container";

import { Box } from "@mui/material";
export default function(){
    return(
        <>        
        <Hero picturePath={ "/gallery.png"} title={'Gallery'} />
        <Box className='body'>
        <Container maxWidth="lg">
        <Grid container spacing={2}>{/**-----------------left--------------------- */}

        <Grid item sm={12} md={10}>
        <Box className='stories-div'>
        <Box className='left-text'><Typography variant="h6" color="steelblue"  gutterBottom>National Events</Typography></Box>

       
                <Grid container spacing={0}>
                        <Grid item sm={6} md={6}>
                     

                        <Box className='news-box  '>
                                <Box className='align-div '>
                                    <Box className='gallery-story-pic'> <img className=" rounded-31xl w-[200px] h-[180px] object-cover" alt="" src="/rectangle-10@2x.png" /></Box>

                                    <Box className="story-highlights">
                                            
                                            <Typography className="story-title font-semibold" style={{ fontSize: '24px' }}>Australia PMs Visit</Typography>
                                            <Box className='story-excerpt ' style={{ fontSize: '14px' }}>Prime Minister Hon. James Marape says Chinese President Xi Jinping has given him an undertaking to buy more or all…</Box>
                                            <hr className="story-horizontal-separator"/> 
                                    </Box>
                                

                                </Box>
                            
                                
                                
                        </Box>
                        </Grid>
                        <Grid item sm={6} md={6}>
                        <Box className='news-box  '>
                                <Box className='align-div '>
                                <Box className='gallery-story-pic'> <img className=" rounded-31xl w-[200px] h-[180px] object-cover" alt="" src="/rectangle-10@2x.png" /></Box>

                                    <Box className="story-highlights">
                                            
                                            <Typography className="story-title font-semibold" style={{ fontSize: '24px' }}>Australia PMs Visit</Typography>
                                            <Box className='story-excerpt ' style={{ fontSize: '14px' }}>Prime Minister Hon. James Marape says Chinese President Xi Jinping has given him an undertaking to buy more or all Prime Minister Hon. James Marape says Chinese President Xi Jinping has given him an undertaking to buy more or all Prime Minister Hon. James Marape says Chinese President Xi Jinping has given him an undertaking to buy more or all…</Box>
                                            <hr className="story-horizontal-separator"/> 
                                    </Box>
                                </Box>                               
                        </Box>
                        </Grid>
                        <Grid item sm={6} md={6}>
                        <Box className='news-box  '>
                                <Box className='align-div '>
                                <Box className='gallery-story-pic'> <img className=" rounded-31xl w-[200px] h-[180px] object-cover" alt="" src="/rectangle-10@2x.png" /></Box>

                                    <Box className="story-highlights">                                            
                                            <Typography className="story-title font-semibold" style={{ fontSize: '24px' }}>Australia PMs Visit</Typography>
                                            <Box className='story-excerpt ' style={{ fontSize: '14px' }}>Prime Minister Hon. James Marape says Chinese President Xi Jinping has given him an undertaking to buy more or all…</Box>
                                            <hr className="story-horizontal-separator"/> 
                                    </Box>
                                </Box>                               
                        </Box>
                        </Grid>               
                </Grid>

        </Box>
        </Grid>
        <Grid item sm={12} md={2}>{/**-------------------right---------------------- */}
            <Box className='stories-div'>

        
            </Box>

        </Grid>         
        </Grid>
        
        </Container>
        </Box>

        
        
    
        </>
    );
}