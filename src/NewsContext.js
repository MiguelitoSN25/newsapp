import React,{ createContext,useEffect,useState } from "react";
import axios from 'axios';

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState([]);
    
    const apiKey = "948893d8776145eeb5b30b0bc3e31cd0";

    useEffect(() => {
        axios
        .get(
            `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
        )
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
    }, [data]);

    return (
    <NewsContext.Provider value={{data}}>
    {props.children}
    </NewsContext.Provider> 
    );
};