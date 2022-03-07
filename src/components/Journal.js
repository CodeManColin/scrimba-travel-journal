import React from 'react'

import { FaMapMarkerAlt } from "react-icons/fa";


export default function Journal(props) {
 
 const {item} = props;

 <FaMapMarkerAlt />

    return (
    <div className="Journal">
       
       <img src={item.imageUrl} className="journal--image" alt="imageUrl" />
      
       <div className="non-image">
      
        <div className="location">
        <FaMapMarkerAlt style={{color: "#F55A5A"}}/>
           <h2>{item.location}</h2>
           <a href={item.googleMapsUrl} style={{color: 'gray'}}>View in Google Maps</a>
        </div> 
       
         <h1>{item.title}</h1>
         <h4>{item.startDate} - {item.endDate}</h4>
         <p style={{fontSize: 20}}>{item.description}</p>

       </div>

    </div>
  )
}
