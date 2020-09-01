import React, { useEffect, useState} from "react";
import "./scss/all.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const[token, setToken] = useState(null)

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    if(_token){
      setToken(_token)
      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {//取的登入者人名
        console.log('person: ', user)
      })
    }
    console.log("Token: ", _token);

  }, [])


  return (
    <div className="App">
    {
      token ? (
       <h1>!!!</h1>
      ):
      (
        <Login />
      )
    }

      
    </div>
  );
}

export default App;
