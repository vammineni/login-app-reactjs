import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const StyledButton = withStyles((theme) => ({
  root: {
    textTransform:'none'
  }
}))(Button);

export default function BaseButton(props) {

  return (
    <>
    <StyledButton  variant="contained" {...props} />
    </>
  );
}
