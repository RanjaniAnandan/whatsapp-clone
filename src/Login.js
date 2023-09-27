import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./stateProvider";

function Login() {
  const [{}, dispatch] = useStateValue();
  const signIn = (event) => {
    event.preventDefault();

    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6aerxbj8cZ1lICJKL4DX8m_HYy_mn9OavzA&usqp=CAU"
          alt=""
        />

        <div className="login__text">
          <h1>Sign in to Whatsapp</h1>
        </div>

        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
