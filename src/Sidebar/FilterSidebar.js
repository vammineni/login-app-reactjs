import { DialogActions, Grid, makeStyles, Slider, TextField, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import BaseButton from "../Components/Button";

const SidebarNav = styled.nav`
  // background: #15171c;
  width: 14%;
  // height: 100vh;
  display: flex;
  justify-content: center;
  position: absolute;
  //top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;
function valuetext(value) {
  return `${value}`;
}
const useStyles = makeStyles(() => ({
  actionButton: {
    marginRight: '10px'
  }
}));
const FilterSidebar = ({ sidebar, appliedFilters, handleInputChange, onReset, applyFilters, handlePriceChange }) => {

  const classes = useStyles();
  return (
    <>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
             <Grid container item xs={12} style={{padding:'5px 5px 5px 20px', fontWeight:'600'
              }} spacing={0}>
                  Filters
              </Grid>
          <form style={{ padding: '20px' }} >
            
            <Grid container alignItems="flex-start" spacing={2}>
              <Grid item xs={12} >
                {/* <FormControl> */}
                <TextField
                  id='name'
                  onChange={handleInputChange}
                  value={appliedFilters.name}
                  placeholder='Enter Name'
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true
                  }}
                  label="Name"
                  size="small"
                  style={{ width: '100%' }} />
                {/* </FormControl> */}
              </Grid>
              <Grid item xs={12} >
                {/* <FormControl> */}
                <TextField
                  id='expiryDate'
                  onChange={handleInputChange}
                  value={appliedFilters.expiryDate}
                  placeholder='m/dd/yyyy'
                  variant="outlined"
                  //format="m/dd/yyyy"
                  //format="DD MMMM YYYY"
                  //type="datetime-local"
                  InputLabelProps={{
                    shrink: true
                  }}
                  label="Expire By"
                  size="small"
                  style={{ width: '100%' }} />
                {/* </FormControl> */}
              </Grid>

              <Grid item xs={12} >
                <Typography id="range-slider" gutterBottom>
                  Price range
                </Typography>
                <Slider
                  value={appliedFilters.price}
                  id='price'
                  min={0}
                  step={100}
                  max={50000}
                  onChange={(event, value) => {
                    handlePriceChange('price', value);
                    // handleInputChange
                  }}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  getAriaValueText={valuetext}
                />
              </Grid>
              <DialogActions style={{ float: 'left' }}>
                <BaseButton
                  className={classes.actionButton}
                  onClick={applyFilters}
                  id='applyBtn'
                  color="primary">
                  Apply
                    </BaseButton>
                <BaseButton
                  className={classes.actionButton}
                  id='clearBtn'
                  onClick={onReset}>
                  Clear All
                    </BaseButton>
              </DialogActions>
            </Grid>
          </form>
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default FilterSidebar;