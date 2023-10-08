'use client'
import { Box, Card, CardContent, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";


export const TopContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#112729", // hero shade fallback
  [theme.breakpoints.up("xs")]: {
    height: "500px",
  },


}))

export const HeroOverlay = styled(Box)(({ theme, props }) => ({
  position: "absolute",
  marginTop:"100px",
  left: "200px",
  top: "20px",
  minWidth: "170px",
  maxWidth: "180px",
  color: "#fff",
  transition: "all 1.2s",
  "& p": {
    fontSize: "1.0rem",
    lineHeight: "1.5rem",
  },
  "& strong": {
    color: theme.palette.secondary.main
  },
  [theme.breakpoints.up("xn")]: {
    maxWidth: "240px",
    "& p": {
      fontSize: "1.1rem",
      lineHeight: "1.65rem",
    },
  },
  [theme.breakpoints.up("sm")]: {
    left: "40px",
    top: "3vh",
    maxWidth: "50vw",
    "& p": {
      fontSize: "1.5rem",
      lineHeight: "2.25rem",
    }
  },
  [theme.breakpoints.up("md")]: {
    "& p": {
      fontSize: "1.75rem",
      lineHeight: "2.5rem",
    }
  },
  [theme.breakpoints.up("lg")]: {
    left: "60px",
    top: "4vh",
    maxWidth: "400px",
    "& p": {
      fontSize: "2rem",
      lineHeight: "2.75rem",
    }
  }
}));

export const SignUpBtn = styled(Button)(({ theme, props = { offset: 0 } }) => ({
  marginTop: "20px",
  padding: "5px 20px",
  borderRadius: "6px",
  textTransform: "capitalize",
  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
  backgroundColor: theme.palette.secondary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  "&:hover": {
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
  }
}));

export const ProfileBox = styled(Box)(({ theme, props }) => ({
  display: "flex",
  flexFlow: "column nowrap",
  justifyContent: "space-between",
  marginBottom: "8px",
  backgroundColor: "#fff",
  [theme.breakpoints.up("md")]: {
    minHeight: "210px"
  }
}));

export const ProfileCard = styled(Card)(({ theme, props }) => ({
  color: "#fff",
  backgroundColor: theme.palette.primary.main,
  transition: "all 0.1s",
  [theme.breakpoints.up("md")]: {
    minHeight: "110px",
  }
}));

export const CardContentLayout = styled(CardContent)(({ theme, props }) => ({
  display: "flex",
  height: "100%",
  flexWrap: "nowrap",
  flexDirection: "column",
  rowGap: "10px",
  [theme.breakpoints.down("xn")]: {
    flexDirection: "row",
    height: "auto",
    minHeight: "35px",
    columnGap: "20px",
    alignItems: "center",
  }
}));

export const ProfileLink = styled(Button)(({ theme, props }) => ({
  width: "100%",
  height: "100%",
  minWidth: "140px",
  minHeight: "40px",
  margin: "0 auto",
  backgroundColor: theme.palette.secondary.main,
  fontSize: "0.9rem",
  lineHeight: "1.1rem",
  justifyContent: "left",
  textAlign: "left",
  textTransform: "inherit",
}));

export const Heading = styled(Typography)(({ theme, props }) => ({
  fontSize: "1.0rem",
  fontWeight: "600",
}));