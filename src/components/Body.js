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
        {/*   <img src={discover_weekly?.images[0].url} alt="playlistPhoto" /> */}
        <img src="https://i.scdn.co/image/ab67616d0000b27397ce551c624c594e17e3cc70" />
        <div className="body__info__text">
          <strong>播放清單</strong>
          <h2>我就爛</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__icons__play" />
          {/* <FavoriteIcon fontSize="large" /> */}
          <MoreHorizIcon fontSize="large" />
        </div>
        {/* 
        {discover_weekly?.tracks.item.map((item) => (
          <SongRow track={item.track} />
        ))} 
        */}

        <div className="body__playlistSongs">
          <div className="body__playlistSongs__title">
            <p className="number">#</p>
            <p className="album__title">標題 </p>
            <p className="album">專輯</p>
            <p className="add__date">已新增日期</p>
          </div>
          <hr />
          <div>
            <SongRow
              url="https://i.scdn.co/image/ab67616d0000b27397ce551c624c594e17e3cc70"
              name="路過人間"
              album="路過人間"
            />
            <SongRow
              url="https://i.scdn.co/image/ab67616d00004851ccce43a832568d049049fb2c"
              name="伯父"
              album='Outta Body靈魂出竅'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
