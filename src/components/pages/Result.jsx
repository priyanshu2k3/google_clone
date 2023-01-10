import React from "react";
import "./Result.css"
import Search from "./Search.jsx"
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/Image';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useStateValue } from "../../Stateprovider";
import getDataFromAPI from "../fetch.js";
import ResultBottom from "./Result_botton";
// import useGoogleSearch from "./../../getdata.jsx"
// import Data from "../data";
// import temp from "../temp";


function Result(){

    const [{term}]=useStateValue();
    console.log(term,"result")
    const data= getDataFromAPI(term)
    console.log(data,"data")
    console.log("infops")

    return(<>
   <div className="resultpage">
    <div className="resultpage__header">
        <a className="resultpage__header__item" href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1bvo441COL4GvNoIiDHBGUTEB1NCDyC9AW7T96SPyzg&s" alt="" /></a>
        <Search classname="resultpage__header__item"/>
    </div>
   
    <div className="result__options">
        <div className="result__options__icon"><SearchIcon/><p>All</p></div>
        <div className="result__options__icon"><ImageIcon/><p>Images</p></div>
        <div className="result__options__icon"><p>Made with <FavoriteIcon/> by PPG</p></div>
    </div>
    
   </div>
   <ResultBottom/>
   </>
    );

};

export default Result;