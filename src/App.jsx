import React from "react"
import Navbar from "./Navbar.jsx"
import List from "./List.jsx"
import Data from "./Data.js"



export default function App(){
    
    const list = Data.map(item =>{
        return(
            <List 
                key = {item.title}
                {...item}   
            />
                
        )
    })

    return(
        <div>
        <Navbar />
        {list}
        </div>
    )
}