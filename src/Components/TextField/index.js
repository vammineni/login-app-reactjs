import React from "react";
import {TextField} from "@material-ui/core";
import { withStyles } from "@material-ui/core";

const StyledTextField= withStyles(() => ({
    root: {
      
    }
  }))(TextField);
  
export function BaseTextField(props) {
    return (
      <>
      <StyledTextField 
        variant="outlined" 
        required 
        type='text' 
        size='small'
        placeholder="Select" 
        InputLabelProps={{
            shrink: true
        }}
        {...props} />
      </>
    );
  }
  