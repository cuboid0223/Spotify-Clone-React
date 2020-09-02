import React from 'react'
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { useDataLayerValue } from '../DataLayer';


const Sidebar = () => {
    const [{playlists}, dispatch] = useDataLayerValue()


    return (
      <div className="sidebar">
        <img
          className="sidebar__logo"
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt="logo"
        />
        <SidebarOption Icon={HomeIcon} title="首頁" />
        <SidebarOption Icon={SearchIcon} title="搜尋" />
        <SidebarOption Icon={LibraryMusicIcon} title="你的音樂庫" />

        <strong className="sidebar__title">PLAYLIST</strong>
        <hr />
        {playlists?.items?.map((playlist) => (
          <SidebarOption title={playlist.name} />
        ))}

       
      </div>
    );
}

export default Sidebar
