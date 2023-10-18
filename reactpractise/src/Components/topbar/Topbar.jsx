import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const {user}=useContext(AuthContext)
  const PF=process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="topbarContainer">
    <div className="topbarLeft">
      <Link to="/" style={{textDecoration:"none"}}>
      <span className="logo">Lamasocial</span>
      </Link>
      
    </div>
    <div className="topbarCenter">
      <div className="searchbar">
        <SearchIcon className="searchIcon"/>
        <input className="searchInput" placeholder="Search for friend, Post or Video"/>
      </div>
    </div>
    <div className="topbarRight">
      <div className="topbarLinks">
        <span className="topbarLink">Homepage</span>
        <span className="topbarLink">Timeline</span>
      </div>
      <div className="topbarIcons">
        <div className="topbarIconItem">
          <PersonOutlineIcon/>
          <span className="topbarIconBadge">1</span>

        </div>
        <div className="topbarIconItem">
          <ChatIcon/>
          <span className="topbarIconBadge">2</span>

        </div>
        <div className="topbarIconItem">
          <NotificationsIcon/>
          <span className="topbarIconBadge">1</span>
        </div>

      </div>
      <Link to={`/profile/${user.username}`}>
      <img src={user.profilePicture ? PF+user.profilePicture : PF+"noavatar.jpg"} alt="" className="topbarImg" />
      </Link>
    </div>
    
    </div>
  )
}
