import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from 'next/link';
import Grid from "@mui/material/Grid";


  export default function Featuredstory({ post}){
    
    return(
      <>
         
{post.length > 0 ? (
        <div>
          <Grid container spacing={0}>
          {post.map((item, index) => (
                   
                   <Grid item sm={6} md={6}>
                   <Box className='story-div'>
                    
                  <Box className='story-pic'>  <img className=" image object-cover" alt="" src="/rectangle-10@2x.png" /></Box>
                  <Box className='story-highlight ' key={item.id}>
                    <div dangerouslySetInnerHTML={{ __html:item.excerpt.rendered }} />
                    </Box>
                  <Box className='story-date font-medium'>   <Link href={`/${item.slug}`}>{item.date}</Link></Box>
                  </Box>
                  <hr className="horizontal-separator"/>
                   </Grid>
          ))}
          </Grid>
        </div>
     
             

) : (
  <p>No items to display.</p>
)}
       </>       
       
    );
}