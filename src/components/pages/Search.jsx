import React, { useState } from "react";
import "./search.css"
import MicNoneIcon from '@mui/icons-material/MicNone';
import SearchIcon from '@mui/icons-material/Search';
import {actionTypes} from "../../reducer.js"
import { useStateValue } from "../../Stateprovider";
import { useNavigate } from "react-router-dom";

function Search(){

    const [input,Setinput]=useState("")

    const[{},dispatch] = useStateValue();
    const navigate = useNavigate()

    function Submit(e){
        e.preventDefault();
        alert(input);
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input})
        navigate("/result");
    }

    return(
    <form className="search">
        <div className="search__input">
        <SearchIcon className="searchicon" onClick={Submit}/>
        <input  value={input} onChange={(e)=>{Setinput(e.target.value)}}/>
        <MicNoneIcon/>
        </div>
        <button type="submit" onClick={Submit} style={{display:"none"}}/>
    </form>
        );

}

export default Search;