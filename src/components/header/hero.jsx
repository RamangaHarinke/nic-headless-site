import React from 'react';
import  { Container, Box, Typography, Button } from '@mui/material';
import { TopContainer, HeroOverlay, SignUpBtn, ProfileBox, ProfileCard, CardContentLayout, ProfileLink, Heading } from "./style";
import Image from 'next/image';

export default function Hero({ picturePath, title }){
    
    return(
        <TopContainer mb="8px">
        <Image
          src={picturePath}
          alt=""
          quality={100}
          fill={true}
          priority
          style={{
            margin: "0 auto",
            objectFit: "cover",
            objectPosition: "right 30%",
            maxWidth: "1200px",
            maxHeight: "1600px",
          }}
        />
        <Container disableGutters maxWidth="lg" sx={{ position: "relative" }}>
          <HeroOverlay>
          <Typography>{title}</Typography>
          </HeroOverlay>
        </Container>
      </TopContainer>
    );
}