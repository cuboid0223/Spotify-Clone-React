import React from "react";
import Header from "./Header";
import { useDataLayerValue } from "../DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from './SongRow';


const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="playlistPhoto" />
        <div className="body__info__text">
          <strong>PLAYLIST</strong>
          <h2>DISCOVER WEEKLY</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__icons__play" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.item.map( item => (
            <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
