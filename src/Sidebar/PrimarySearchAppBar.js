import React from 'react';
import { /*fade, */makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import BaseButton from '../Components/Button';
import { NavLink } from 'react-router-dom';
// import { faWindowClose } from '@fortawesome/free-regular-svg-icons';

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
    fontSize:'20px'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      // backgroundColor: fade('#f5f5f5', 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      //marginLeft: theme.spacing(3),
      width: 'auto',
    },
    color: '#bfbfbf',
    backgroundColor: '#f5f5f5'
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#bfbfbf',
    backgroundColor: '#f5f5f5'
  },
  inputRoot: {
    color: '#bfbfbf',
    '&:hover': {
      // backgroundColor: fade('#f5f5f5', 0.25),
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
    '&:hover': {
      // backgroundColor: fade('#f5f5f5', 0.25),
    },
    //cursor:'pointer'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
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

export default function PrimarySearchAppBar({ ...props }) {
  const classes = useStyles();

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
            onClick={props.toggleSidebar}
          >
            {/* <Home fontSize="small" /> */}
            <FontAwesomeIcon icon={faBars} fontSize="large" />
            {/* {props.sidebar && <FontAwesomeIcon icon={faWindowClose} fontSize="large" />} */}
          </Button>
          <div className={classes.title}>Product Catalog</div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Product "
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
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
              <NavLink activeClassName="active" to="/" style={{ color: 'white', textDecoration: 'none' }} onClick={props.handleLogout} >Logout</NavLink>
            </BaseButton>

          </div>
        </StyledToolbar>
      </StyledAppBar>
    </span>
  );
}
