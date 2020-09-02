import React from "react";
import Sidebar from "./Sidebar";
import Body from './Body';
import Footer from './Footer';


const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        {/* side bar */}
        <Sidebar />
        {/* body */}
        <Body spotify={spotify}/>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Player;
