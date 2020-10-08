import React,{useState,createContext} from "react";

export const MovieContext=createContext();

export const MovieProvider = (props) => {
    const[Movies,setMovies]=useState([
        { 
            name:"harry porter",
            price:"$50",
            id:123
        },
        {
         name:"Kannum Kannum",
         price:"$30",
         id:124   
        },
        {
         name:"Yennai ArinDhal",
         price:"$60",
         id:124  
        },
    ]); 
    return(
        <MovieContext.Provider value={[Movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}
