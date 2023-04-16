import React, { useContext } from 'react';
import { AuthContext } from './../context/AuthContext';

const LoginText = () => {
  const { state, login, logout } = useContext(AuthContext);
  console.log(state, "state here")

  return (
    <div>user here -
      {/* {state.user} */}
    </div>
  )
}

export default LoginText