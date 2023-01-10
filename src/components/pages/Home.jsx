import React from "react";
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Search from "./Search";
import "./Home.css"

function Home(){
    return(
        <div className="home">
        <div className="home_header">
            <div className="home_header_left"><p>About</p><p>Store</p></div>
            <div className="home_header_right"><p>Gmail</p><p>Images</p><AppsIcon /><AccountCircleIcon /></div>
        </div>
        <div className="body">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1bvo441COL4GvNoIiDHBGUTEB1NCDyC9AW7T96SPyzg&s" alt="" />
        </div>
        <div className="input_container"><Search/></div>
        <p>Made with <FavoriteIcon/> by PPG</p>
        </div>
    );
}
export default  Home;