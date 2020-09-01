import React from "react";
import { loginUrl }from '../spotify';


const Login = () => {
  return (
    <div className="login">
      {/* spotify logo */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWwSDcPB5BiNYYBFYC9kcG8st464LzORMRsA&usqp=CAU"
        alt="logo"
      />
      {/*  login with spotify button */}
      <a href={loginUrl}>登 入  SPOTIFY</a>
    </div>
  );
};

export default Login;
