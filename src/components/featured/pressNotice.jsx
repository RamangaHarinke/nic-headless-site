
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from 'next/link';


export default function Press({ post}){
    return(
               
      <>
         
         {post.length > 0 ? (
                 <div>
                   {post.map((item, index) => (
                         <Box className='story-div' key={item.id}>
                         <Box className="flexbox">
                             <Box className="story-highlights">
                                     
                                     <Typography className="story-title font-semibold" style={{ fontSize: '20px' }}>{item.title.rendered}</Typography>
                                     <Typography className='story-date font-medium' style={{ fontSize: '11px' }}>{item.date}</Typography>
                                     <hr className="story-horizontal-separator"/>
                             </Box>
                             <Box className='story-pic2'> <img className="  w-[180px] h-[140px] object-cover" alt="" src="/rectangle-10@2x.png" /></Box>
                            
                         </Box>
                     
                         
                        
                         </Box>
                   ))}
                 </div>
              
                      
         
         ) : (
           <p>No items to display.</p>
         )}
               
        </>   
        

    );
}