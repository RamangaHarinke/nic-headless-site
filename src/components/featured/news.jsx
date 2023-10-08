import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState , useEffect } from 'react';

export default function  News (){
    
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('https://content.elections.info.gov.pg/wp-json/wp/v2/pages'); // Replace with your API endpoint
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
  
          const apiData = await response.json();
          console.log(apiData);
          setPost(apiData);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        }
      }

 
      fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (!post) {
        return <div>Error: Unable to fetch data.</div>;
      }
      if (post.length<0) {
        return <div>Error: Unable to fetch data data.</div>;
      }
    
    return(
        <>
           
                <div>
                {post.map((item, index) => (
                        <Box className='story-div' key={item.id}>
                        <Box className="flexbox">
                            <Box className="story-highlights">
                                    
                                    <Typography className="story-title font-semibold" style={{ fontSize: '24px' }}>{item.title.rendered}</Typography>
                                    <Box className='story-excerpt ' style={{ fontSize: '14px' }}><div dangerouslySetInnerHTML={{ __html:item.excerpt.rendered }} /></Box>
                                    <Typography className='font-medium' style={{ fontSize: '11px' }}>{item.date}</Typography>
                            </Box>
                            <Box className='story-pic2'> <img className=" rounded-31xl w-[321px] h-[213px] object-cover" alt="" src="/rectangle-10@2x.png" /></Box>
                           
                        </Box>
                    
                        
                        <hr className="story-horizontal-separator"/>
                        </Box>
                ))}
                </div>
               
        </>       
        
    );
                 
}


