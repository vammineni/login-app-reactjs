import React from 'react'

import Grid from '@material-ui/core/Grid';

function PageHeader({...props}){    

   return(
        <Grid container item xs={12} style={{padding:'5px',
            borderWidth: '1px 0px 2px 0px', borderStyle:'solid', borderColor:'rgba(0, 0, 0, 0.12)'
        }} spacing={0}>
            {props.title}
        </Grid>
   )
 }

export default PageHeader;