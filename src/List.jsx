import React from "react"


export default function List(props){
    return(
        
        <div className="card">
            <img src={props.imageUrl} className="card--image"/>
            <div className="card--info--div">
                <div className="card--header">
                <p className="card--location"><i className="fa-solid fa-location-dot"></i>{props.location}</p>
                <a href={props.googleMapsUrl} className="card--link">View on Google maps</a>
                </div>
                <h3 className="card--title">{props.title}</h3>
                <p className="card--date">{props.startDate}-{props.endDate}</p>
                <p className="card--desc">{props.description}</p>
            </div>  
        </div>
        
    )
}