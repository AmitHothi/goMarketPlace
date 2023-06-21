import React, { useState, useEffect } from "react";
import "../../../styles/products.css";

import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";
import Select from "react-select";
import { FilterList } from "@mui/icons-material";
import { Avatar, Button, IconButton, Link } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { Tooltip } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Radio from "@mui/joy/Radio";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Table,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productList } from "../../../redux/productAction";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import Editproduct from "./EditProduct";

const marketPlaces = [
  { value: "india", label: "India" },
  { value: "paris", label: "Paris" },
  { value: "japan", label: "Japan" },
  { value: "london", label: "London" },
  { value: "usa", label: "USA" },
  { value: "uae", label: "UAE" },
  { value: "others", label: "Others" },
];

const categorys = [
  { value: "belt", label: "Belt" },
  { value: "dress", label: "Dress" },
  { value: "jacket", label: "Jacket" },
  { value: "jeans", label: "Jeans" },
  { value: "menswear", label: "Men'sWear" },
  { value: "shirt", label: "Shirt" },
  { value: "shoes", label: "Shoes" },
  { value: "top", label: "Top" },
  { value: "t-shirt", label: "T-shirt" },
  { value: "others", label: "Others" },
];

const customStyles = {
  control: (base) => ({
    ...base,
    height: "50px",
  }),
};

const FilterButton = {
  width: "100%",
  overflow: "hidden",
  height: "50px",
};

const grid = {
  marginLeft: "-30px",
  alignItems: "flex-end",
  justifyContent: "space-between",
};

const Products = ({ setProductDetails, productDetails }) => {
  console.log("productDetails", productDetails);
  const [category, setCategory] = useState("");
  const [marketPlace, setMarketPlace] = useState(null);
  const [isSelectAll, setIsSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  let data = useSelector((state) => state.productData);
  console.log("data in main componets from saga", isCheck);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productList());
  }, []);

  const handleSelectAll = (e, productDetails) => {
    console.log("productDetails1", e, productDetails);
    setIsSelectAll(!isSelectAll);
    setIsCheck(data?.map((item) => item.id));
    if (isSelectAll) {
      setIsCheck([]);
    }
  };

  const handleClick = (e, item) => {
    setProductDetails(item);
    setSelectedValue(item.id);

    // const {id, checked} = e.target;
    // setIsCheck([...isCheck,id]);
    // if(!checked){
    //   setIsCheck(isCheck.filter(item=>item !== id));
    // }
  };

  return (
    <div className="products-container">
      <Grid container spacing={3} sx={grid}>
        <Grid item xs={3}>
          <Checkbox
            sx={{
              overflow: "hidden",
              marginLeft:"-10px"
            }}
            label="Select All products"
            // name={`product-radio-${productDetails.id}`}
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<RadioButtonCheckedIcon />}
            onClick={() => handleSelectAll()}
            checked={isSelectAll}
            // checked={!products.some((products)=> products?.isChecked !== true)}
          />
          <FormCheckLabel>Select All Products</FormCheckLabel>
        </Grid>

        <Grid item xs={3}>
          <Paper>
            <FormControl fullWidth>
              <Select
                defaultValue={category}
                placeholder="Category"
                options={categorys}
                onChange={setCategory}
                isClearable
                isSearchable
                styles={customStyles}
              />
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <FormControl fullWidth>
              {/* <InputLabel id="demo-simple-select-label">
                All Marketplace
              </InputLabel> */}
              <Select
                defaultValue={marketPlace}
                placeholder="MarketPlace"
                onChange={setMarketPlace}
                options={marketPlaces}
                isClearable
                isSearchable
                styles={customStyles}
              ></Select>
            </FormControl>
          </Paper>
        </Grid>
        <Grid
          sx={{
            overflow: "hidden",
          }}
          item
          xs={3}
        >
          <Paper>
            <Button sx={FilterButton}>
              <Tooltip title="Filter list">
                <IconButton aria-label="filter list">
                  <FilterList />
                  <InputLabel id="demo-simple-select-label">
                    More Filters
                  </InputLabel>
                </IconButton>
              </Tooltip>
            </Button>
          </Paper>
        </Grid>
      </Grid>

      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {data.map((item) => (
              <>
                <TableRow
                  // onClick={(e) => handleClick(e, item)}
                  key={item.id}
                  sx={{
                    marginBottom: "10px",
                    borderBottom: "8px solid whitesmoke",
                  }}
                >
                  <TableCell>
                    <Radio
                      name={`product-radio-${item.id}`}
                      // checked={selectedValue  === item.id}
                      checked={
                        isSelectAll
                          ? isCheck.map((itm) => itm.id === item.id)
                          : selectedValue === item.id
                      }
                      onClick={(e) => handleClick(e, item)}
                      // value={item.id}
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<RadioButtonCheckedIcon />}
                    />
                  </TableCell>
                  <TableCell align="center">
                    {/* <img
                    src={item.photo}
                    style={{ width: 55, height: 55, borderRadius: "50%" }}
                  /> */}
                    <Avatar
                      alt="Product-Image"
                      src={item.photo}
                      sx={{ width: 56, height: 56 }}
                    />
                  </TableCell>
                  <TableCell
                    sx={{ fontWeight: "bold" }}
                    component="th"
                    scope="row"
                  >
                    <p
                      style={{
                        fontSize: 12,
                        marginBottom: "0",
                        marginTop: "-10%",
                        color: "gray",
                        width: "max-content",
                        fontWeight: 400,
                      }}
                    >
                      Product Name
                    </p>
                    {item.Productname}
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    <p
                      style={{
                        fontSize: 12,
                        marginBottom: "0",
                        marginTop: "-25%",
                        color: "gray",
                        width: "max-content",
                        fontWeight: 400,
                      }}
                    >
                      Market Place
                    </p>
                    {item.marketPlace}
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", width: "max-content" }}>
                    <p
                      style={{
                        fontSize: 12,
                        marginBottom: "0",
                        marginTop: "-18%",
                        color: "gray",
                        width: "max-content",
                        fontWeight: 400,
                      }}
                    >
                      Color
                    </p>
                    {item.color}
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", width: "max-content" }}>
                    <p
                      className=""
                      style={{
                        fontSize: 12,
                        marginBottom: "0",
                        marginTop: "-18%",
                        color: "gray",
                        width: "max-content",
                        fontWeight: 400,
                      }}
                    >
                      Brand
                    </p>
                    {item.brand}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 12,
                        marginBottom: "0",
                        marginTop: "-18%",
                        color: "gray",
                        width: "max-content",
                        fontWeight: 400,
                      }}
                    >
                      Category
                    </p>
                    <Link>{item.category}</Link>
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    <p
                      style={{
                        fontSize: 12,
                        marginBottom: "0",
                        marginTop: "0",
                        color: "gray",
                        width: "max-content",
                        fontWeight: 400,
                      }}
                    >
                      Inventory
                    </p>
                    {item.Inventory}
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Editproduct /> */}
    </div>
  );
};

export default Products;
