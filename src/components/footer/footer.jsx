
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer(){
    return(
        
       
<Box className="footer">
      <Box className="footer-link">
        <Grid container spacing={5} className="background" >
          <Grid item xs={12} sm={4} className="centered">
            <Box className='centered'>
            <Typography variant="h6" color="white" gutterBottom>
             CONTENT
            </Typography>
            <Typography variant="body2" color="white" className="links">News            </Typography>
            <Typography variant="body2" color="white" className="links">Press Release   </Typography>
            <Typography variant="body2" color="white" className="links">Notices         </Typography>
            <Typography variant="body2" color="white" className="links">Other Policies  </Typography>
            <Typography variant="body2" color="white" className="links">Gallery         </Typography>
            <Typography variant="body2" color="white" className="links">Contact         </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
            USEFUL LINKS
            </Typography>
            <Typography variant="body2" color="white" className="links">National Electoral Commission</Typography>
            <Typography variant="body2" color="white" className="links">Department of Information and Communications Technology</Typography>
            <Typography variant="body2" color="white" className="links">Ombudsman Commission</Typography>
            <Typography variant="body2" color="white" className="links">NICTA</Typography>
            <Typography variant="body2" color="white" className="links">National Broadcasting Corporation</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>CONNECT WITH US</Typography>
            <Typography variant="body2" color="white" className="links">Contact</Typography>
            <Typography variant="body2" color="white" className="links">Facebook</Typography>
            <Typography variant="body2" color="white" className="links">LinkedIn</Typography>
            <Typography variant="body2" color="white" className="links">Youtube</Typography>
            <Typography variant="body2" color="white" className="links">Privacy Policy</Typography>
            <Typography variant="body2" color="white" className="links">Copyright</Typography>
          </Grid>
          
        </Grid>
      </Box>
      <Box className="footer-copyright">
          <Typography variant="body2" color="white" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
            {new Date().getFullYear()} Papua New Guinea National Information Center I All Rights
          Reserved
            </Link>{" "}
         
          
            {"."}
          </Typography>
        </Box>
     
    </Box>
       
    );
}