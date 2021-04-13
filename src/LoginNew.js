
import React, { useState } from "react";
import CustomInput from './Components/Input/CustomInput';
import Button from './Components/ButtonNew/Button';
//import "./styles.css";

import { makeStyles } from '@material-ui/styles';

// import axios from 'axios';
import { setUserSession } from './Utils/Common';
import PublicAppBar from "./Sidebar/PublicAppBar";

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
    onEnter(e);
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
          <CustomInput
            labelText="User Name"
            id="userName"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={handleChange}
            type="text"
            value={login.userName}
          />
          <CustomInput
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={handleChange}
            type="password"
            value={login.password}
          />
          {error && <><small style={{ color: 'red' }}>{error}</small></>}
          <Button type="button" color="primary"
           onClick={handleLogin} >
            Log in
          </Button>
        </form>
      </div>
  );
}


export default LoginNew;