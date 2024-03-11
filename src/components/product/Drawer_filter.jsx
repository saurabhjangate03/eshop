import { Checkbox, Container, Divider, FormControlLabel, FormGroup, Grid } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setPricefilterProduct, setTimeFilterProduct } from "../../redux/reducer_functions/ProductSlice";

const Drawer_filter = () => {
  const dispatch = useDispatch()
  const [selectedPriceOption, setSelectedPriceOption] = useState(null);
  const [selectAvailability,setSelectedAvailability] = useState(null);

  // ------------------------------------ handle checkbox select - START ----------------------------
  // for price checkbox 
  const handlePriceCheckboxChange = (option) => {
    setSelectedPriceOption(option);
    if(option=="LowToHigh"){
        dispatch(setPricefilterProduct("LowToHigh"))
    }
    if(option=="HighToLow"){
      dispatch(setPricefilterProduct("HighToLow"))
    }
    if(option==="Default"){
      dispatch(setPricefilterProduct("Default"))
    }
  };

  // for arrival checkbox
  const handleArrivalCheckboxChange = (option) => {
    setSelectedAvailability(option);
    if(option==="Newest"){
      dispatch(setTimeFilterProduct("Newest"))
    }
    if(option==="Old Stock"){
      dispatch(setTimeFilterProduct("Old"))
    }
    if(option==="All Time"){
      dispatch(setTimeFilterProduct("All Time"))
    }
  };
   // ------------------------------------ handle checkbox select - ENDS ----------------------------

  return (
    <>

    {/* ---------------------------- Drawer body - START ----------------------------- */}
    <Container style={{ marginTop: '20px' }}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >


        {/* ---------------------- filter product option - START -------------------------- */}
        <Grid sx={{marginBottom:"20px"}}>
          <h3>Filter Products</h3>
          <Divider sx={{marginTop:"8px"}}/>
        </Grid>

        {/* ---------------------- filter price options - START ----------------------------- */}
        <Grid sx={{marginTop:"20px"}}>
          <h5>Price</h5>
          <FormGroup>

          {/* for Deafult oder of products */}
          <FormControlLabel
              control={
                <Checkbox
                  checked={selectedPriceOption === "Default"}
                  onChange={() => handlePriceCheckboxChange("Default")}
                />
              }
              label="Default"
            />

            {/* for Low to HIGH order */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedPriceOption === "LowToHigh"}
                  onChange={() => handlePriceCheckboxChange("LowToHigh")}
                />
              }
              label="Low to High"
            />

            {/* for high to low order */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedPriceOption === "HighToLow"}
                  onChange={() => handlePriceCheckboxChange("HighToLow")}
                />
              }
              label="High to Low"
            />
          </FormGroup>
        </Grid>
        {/* ---------------------- filter price options - ENDS ----------------------------- */}

        
        {/* ---------------------- filter Availability options - START ----------------------------- */}
        <Grid sx={{marginTop:"20px"}}>
          <h5>Availability</h5>
          <FormGroup>

            {/* for newster product first order */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectAvailability === "Newest"}
                  onChange={() => handleArrivalCheckboxChange("Newest")}
                />
              }
              label="New Arrivals"
            />

            {/* for older items firts order */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectAvailability === "Old"}
                  onChange={() => handleArrivalCheckboxChange("Old")}
                />
              }
              label="Old Stock"
            />

            {/* for random order */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectAvailability === "All Time"}
                  onChange={() => handleArrivalCheckboxChange("All Time")}
                />
              }
              label="All Time"
            />
          </FormGroup>
           {/* ---------------------- filter availabiltiy option - ENDS -------------------------- */}


        </Grid>
      </Grid>
    </Container>
      {/* ---------------------------- Drawer body - ENDS ----------------------------- */}
    </>
  );
};

export default Drawer_filter;
