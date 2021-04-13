import React from 'react';
import { /*fade, */makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import BaseButton from '../Components/Button';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    marginRight: 10,
    fontSize: '20px'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  }
}));
const StyledAppBar = withStyles(() => ({
  root: {
    // backgroundColor: '#fff',
    // backgroundColor: theme.paper.background,
    // color: 'rgba(0, 0, 0, 0.87)'
  },
  colorPrimary: {
    // backgroundColor: '#fff',
    // backgroundColor: theme.paper.background,
    // color: 'rgba(0, 0, 0, 0.87)'
  }
}))(AppBar);
const StyledToolbar = withStyles({
  root: {
    minHeight: '56px',
    paddingLeft: '16px'
  }
})(Toolbar);

export default function PublicAppBar() {
  const classes = useStyles();
  const handleSignup = () => {
    console.warn('handleSignup --TODO');
  }
  return (
    <span className={classes.grow}>
      <StyledAppBar position="sticky">
        <StyledToolbar>
          <Button
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="toggle-sidebar"
            size="large"
            style={{ marginLeft: 0, minWidth: 'auto', fontSize: '20px' }}
            width="auto"
          >
            <FontAwesomeIcon icon={faBars} fontSize="large" />
          </Button>
          <div className={classes.title}>Product Catalog</div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <BaseButton
              edge="end"
              aria-label="logout"
              //aria-controls={menuId}
              aria-haspopup="true"
              color="primary"
              size="small"
            // onClick={handleLogout}
            // style={{backgroundColor:'purple'}}
            // style={{border:'1px solid lightBlue'}}
            >
              <NavLink activeClassName="active" to="/" style={{ color: 'white', textDecoration: 'none' }} onClick={handleSignup} >Sign Up</NavLink>
            </BaseButton>

          </div>
        </StyledToolbar>
      </StyledAppBar>
    </span>
  );
}
