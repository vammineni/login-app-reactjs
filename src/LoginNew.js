
import React, { useState } from "react";
import Button from './Components/ButtonNew/Button';

import { makeStyles } from '@material-ui/styles';

// import axios from 'axios';
import { setUserSession } from './Utils/Common';
import PublicAppBar from "./Sidebar/PublicAppBar";
import { Grid, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  body: {
    background: '#637d63'
  },
  
  app: {
    fontFamily: 'sans-serif',
    textAlign: 'center'
  },
  form: {
    maxWidth: '330px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    padding: '20px',
    marginTop: '30px',
    border: '1px solid #dedede',
    borderRadius: '5px'
  }
}));

function LoginNew(props) {
  const classes = useStyles();
  const [login, setLogin] = useState({userName:'', password:''});
  const [loading,setLoading] = useState(false);
 
  const [error, setError] = useState(null);

  const handleChange = e => {
    setLogin({...login, [e.currentTarget.id]: e.currentTarget.value });
    //onEnter(e);
  };

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    // axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
    //   setLoading(false);
    //   setUserSession(response.data.token, response.data.user);
    //   props.history.push('/dashboard');
    // }).catch(error => {
    //   setLoading(false);
    //   if (error.response.status === 401) setError(error.response.data.message);
    //   else setError("Something went wrong. Please try again later.");
    // });
    if(login.userName === 'TestUser' && login.password === 'TestUser123') {
      setLoading(false);
      setUserSession('token-test', login.userName);
      props.history.push('/productDashboard');
    } else {
      setLoading(false);
      setError("Something went wrong, please try again later.");
    }
  }
  const onEnter = (event) => {
    if(event.key === 'Enter') {
      handleLogin();
    }
  }

  return (
    <div className={classes.app}>
        <PublicAppBar/>
        <form className={classes.form}>
          <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={12} style={{  margin:'10px 0px' }}>
                  <TextField
                      id='userName'
                      onChange={handleChange}
                      value={login.userName}
                      placeholder='Enter User Name'
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true
                      }}
                      type="text"
                      label="User Name"
                      size="small"
                      onKeyUp={onEnter}
                      style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} style={{  margin:'10px 0px' }}>
                  <TextField
                      id='password'
                      onChange={handleChange}
                      value={login.password}
                      placeholder='Enter Password'
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true
                      }}
                      type="password"
                      label="Password"
                      size="small"
                      onKeyUp={onEnter}
                      style={{ width: '100%' }} />
                </Grid>
              </Grid>
          {error && <><small style={{ color: 'red', margin:'10px' }}>{error}</small></>}
          <Button type="button" color="primary" disabled={loading}
           onClick={handleLogin} >
            Log in
          </Button>
        </form>
      </div>
  );
}


export default LoginNew;