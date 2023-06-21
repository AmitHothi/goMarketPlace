import React, { useState } from "react";
import "../../../styles/editProduct.css";
import {
  Grid,
  Paper,
  styled,
  Button,
} from "@mui/material";
import ImgCards from "../../../components/card/ImgCard";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "react-select";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const categorys = [
  { value: "dresses", label: "Dresses" },
  { value: "jackets", label: "Jackets" },
  { value: "jeans", label: "Jeans" },
  { value: "shirts", label: "Shirts" },
  { value: "t-shirts", label: "T-shirts" },
  { value: "others", label: "Others" },
];

const customStyles = {
  control : base =>({
    ...base,
    height: "50px"
  })
}

const Editproduct = ({productDetails}) => {
  const [category, setCategory] = useState(null);


  return (
    <div className="main-container">
      <div className="heading">
        <h2>Edit Products</h2>
      </div>
      <div className="content">
        <h4>Attention Please! </h4>
        <p style={{ color: "gray", marginTop: -25 }}>
          The operations you make here will affect all prodduct variants
        </p>
      </div>
      <div className="card-container">
        <Grid container spacing={1} sx={{ overflow: "auto", height: "79vh" }}>
          <Card
            sx={{
              minWidth: "88%",
              margin: "5%",
              height: "auto",
              backgroundColor: "whitesmoke",
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Product Images
              </Typography>
              <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid xs={12} sx={{paddingTop:"30px"}}>
                  <Grid container sx={{marginLeft:"-14px"}} spacing={3}>
                    {/* {[0, 1, 2].map((value) => ( */}
                      {/* <Grid  sx={{paddingLeft:"0px"}} item> */}
                       <Grid item xs={4}>
                        <ImgCards>
                        <img src={productDetails.photo} style={{height:"100%"}} alt="productImg" />
                        </ImgCards> 
                       </Grid> 
                       <Grid item xs={4}>
                        <ImgCards> 
                        </ImgCards>
                       </Grid>
                       <Grid item xs={4}>
                        <ImgCards />
                       </Grid>
                            {/* sx={{
                            height: 140,
                           width: 100,
                           }}  *
                        
                           <button
                            style={{
                              fontSize: "10px",
                              fontWeight: "400",
                              margin: "50px 0 0 8px",
                              backgroundColor: "white",
                              color: "gray",
                              border: "1px solid lightgray",
                              borderRadius: "5px",
                              height: "30px",
                            }}
                          >
                            Add New Image
                          </button> 
                           <img src={productDetails.photo} style={{height: "100%"}} alt="productImg" />
                            <input type="file"    placeholder="" /> 
                         </Card> */}
                      </Grid>
                    {/* ))} */}
                  </Grid>
                {/* </Grid> */}
              </Grid>

              <Typography
                sx={{ mt: 1.5, fontSize: "14px", color: "text.secondary" }}
              >
                Product Name
              </Typography>
              <input defaultValue={productDetails.Productname}  type="text" className="input-box" placeholder="enter product name" />

              <Typography
                sx={{ mt: 1.5, fontSize: "14px", color: "text.secondary" }}
              >
                Product Description
              </Typography>
              <input defaultValue={productDetails.productDescription} type="text" className="input-box" placeholder="enter product description"/>
            </CardContent>
            
          </Card>

          <Card
            sx={{
              minWidth: "88%",
              margin: "5%",
              backgroundColor: "whitesmoke",
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                sx={{ fontSize: 16, fontWeight: "bold" }}
                gutterBottom
              >
                Price
              </Typography>

              <Typography
                variant="body2"
                component="div"
                color="text.secondary"
                sx={{ height: "10px", mb: 2 }}
              >
                Purchase Price
              </Typography>
              <input defaultValue={productDetails.price} className="input-box" type="number" placeholder="$" />

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography sx={{ mt: 5 }} color="text.secondary">
                    Selling Price
                  </Typography>
                  <input defaultValue={productDetails.sellingPrice} className="input-box" type="number" placeholder="$" />
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ mt: 5 }} color="text.secondary">
                    Compare at Price
                  </Typography>
                  <input defaultValue={productDetails.compareatPrice} className="input-box" type="number" placeholder="$" />
                </Grid>
              </Grid>
              
            </CardContent>
          </Card>

          <Card
            sx={{
              minWidth: "88%",
              margin: "5%",
              backgroundColor: "whitesmoke",
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                sx={{ fontSize: 16, fontWeight: "bold" }}
                gutterBottom
              >
                Inventory
              </Typography>
              <Typography
                variant="body2"
                component="div"
                sx={{ height: "10px", mb: 2, color: "text.secondary" }}
              >
                Category
              </Typography>
              <FormControl fullWidth sx={{ backgroundColor: "white" }}> 
                <Select
                  defaultValue={category}
                  options={categorys}
                  onChange={setCategory}
                  
                  placeholder="category"
                  isClearable
                  isSearchable
                  styles={customStyles}
                  
                ></Select>
              </FormControl>
              <Typography
                variant="body2"
                component="div"
                color="text.secondary"
                sx={{ height: "50px", mt: 2 }}
              >
                HTS code
                <input
                defaultValue={productDetails.htsCode}
                  className="input-box"
                  type="text"
                  placeholder="enter hts code"
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Button
          variant="contained"
          sx={{
            width: "400px",
            height: "45px",
            top: "0px",
            marginLeft: "30px",
          }}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default Editproduct;
