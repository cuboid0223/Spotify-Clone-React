import React, { useEffect, useState } from "react";
import "./scss/all.css";

import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer"; // Context API

import Login from "./components/Login";
import Player from "./components/Player";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        //取得登入者人名
        console.log("Login Person info: ", user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("317rb3t3hbwcngbjxgo4xv6hjbk4").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
    // console.log("Token: ", _token);
  }, []);
  // console.log("user: ", user); //test user state working?
  // console.log("token: ", token); //test token state working?
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
