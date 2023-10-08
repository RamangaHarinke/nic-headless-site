'use client';
import React from 'react';
import Image from 'next/image';
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Box } from "@mui/material";
import Link from 'next/link';


export default function Header(){
    return(
      <>
      <div className='header-container'>
      <div className='header-div'>
      
      <div className="header-items">
          <Grid container spacing={2}>
       
          <Grid item xs={12} sm={3} md={3}>
              <Box className='header-box' style={{  }}>    
                  <Image
                        src="/png-crest@2x.png"
                        alt="logo"
                        className="items-logo"
                        width={139}
                        height={99}
                        priority />
             
             </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
              <Box className='header-box' style={{  }}>    
                  
                <p className='items-title'>PNG National Information Center</p>
             </Box>
          </Grid>
 
          <Grid item xs={12} sm={3} md={3}>
              <Box className='header-box' style={{  }}>    
                    <TextField
                        className='items-search'
                        variant="outlined"
                        size="small"
                        fullWidth
                        InputProps={{
                            style: {
                                borderRadius: '2px',
                                border:'40px',
                                width: '200px',
                                backgroundColor: 'steelblue',
                            },
                            startAdornment: (
                              <InputAdornment position="start">
                                <img src="/nic-search-icon@2x.png" alt="Search Icon" 
                                style={{ width: '33px', height: '30px', background:"steelblue"}}/>
                              </InputAdornment>
                            ),
                        }}
                        placeholder="Search..."
                    />
                </Box >
          </Grid>
        </Grid>
      </div>
      </div>
      
      <div className="header-link-bar">
        <ul className="menu-list">
          <li className="menu-item">
             <Link href="/home"> Home </Link>
          </li>
          <li className="menu-item">         
          <Link href="/news">News</Link>
          </li>
          <li className="menu-item">
          <Link href="/pressrelease">Press Release</Link>
          </li>
          <li className="menu-item">
          <Link href="/notice">Notice</Link>
          </li>
          <li className="menu-item">
          <Link href="/policies"> Other Policies</Link>           
          </li>
          <li className="menu-item">
          <Link href="/gallery"> Gallery</Link>
          </li>
          <li className="menu-item">
          <Link href="/contact">Contact Us</Link>        
          </li>
        </ul>
      </div>
       

      </div>
       
       </>
    );
}