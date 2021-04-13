import { Grid} from '@material-ui/core';
import React from 'react';


// const useStyles = makeStyles(() => ({
//     root: {
//         flexGrow: 1,
//     }
// }));

export function Widget({...props}) {
    return (
        <>
            <Grid item  xs={props.xs ? props.xs : 6} style={{padding:'5px'}}>
                {props.content}
            </Grid>
        </>
    );
}