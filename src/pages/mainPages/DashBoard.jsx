import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Products from "../sideBarPages/productPage/Products";
import Editproduct from "../sideBarPages/productPage/EditProduct";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "whitesmoke",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DashBoard = () => {

   const [productDetails, setProductDetails] = useState([])
   console.log("item",productDetails)
  
  return (
    <Box sx={{ display: "flex", flexDirection: "row", top: "0", width:"auto" }}>
      <Sidebar  />
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item
            sx={{
              position: "relative",
              top: "0",
            }}
          >
            <Box sx={{ width: "100%", marginTop: -12 }}>
              <Navbar />
              {/* <Box sx={{ height: "100%",marginTop:"10%",}}> */}
            </Box>
          </Item>
          <Item>
            <Box sx={{ overflow: "auto", height: "86vh" }}>
              <Products setProductDetails={setProductDetails} productDetails={productDetails} />
            </Box>
          </Item>
        </Grid>
        <Grid sx={{ marginTop: "15px" }} xs={4}>
          <Box sx={{ marginLeft: "0px", position: "absolute" }}>
            <Editproduct productDetails={productDetails} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashBoard;
