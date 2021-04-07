import React from 'react';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import { Grid } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Close } from '@material-ui/icons';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import BaseButton from '../Button';

const useStyles = makeStyles({
    list: {
        // width: '250',
    },
    fullList: {
        // width: '30%',
    },
});
const StyledSwipeableDrawer = withStyles({
    root: {
    },
    paperAnchorRight: {
        left: '60%',
    }
})(SwipeableDrawer);

function BaseSwipeableDrawer(props) {

    return (
        <>
            <StyledSwipeableDrawer
                swipeAreaWidth={10}
                anchor='right'
                open={false}
                // disableBackdropTransition={true}
                {...props} />
        </>
    );
}

function BaseDrawerContent(props) {
    const classes = useStyles();
    return (

        <div
            className={clsx(classes.list, {
                [classes.fullList]: props.anchor === 'top' || props.anchor === 'bottom',
            })}
            style={{ height: '90%' }}
            role="presentation"
        >
            {props.drawerTitle &&
                <Grid container spacing={0}>
                    <Grid item xs={11}>
                        <DialogTitle>{props.drawerTitle}</DialogTitle>
                    </Grid>
                    <Grid item xs={1}>
                        <DialogTitle style={{ float: 'right' }}><Close style={{ cursor: 'pointer' }} onClick={props.toggleDrawer(false)} /> </DialogTitle>
                    </Grid>
                </Grid>
            }
            <Divider />
            <DialogContent style={{ height: 'calc(100% - 64px)' }}>
                {props.drawerContent && props.drawerContent}
            </DialogContent>
            <Divider />
            {props.customDialogActions && props.dialogActions}
            {!props.customDialogActions &&
                <DialogActions style={{ float: 'left' }}>
                    <BaseButton onClick={props.toggleDrawer(false)} color="primary">
                        Close
                    </BaseButton>
                </DialogActions>
            }
        </div>
    );
};

export { BaseSwipeableDrawer, BaseDrawerContent };