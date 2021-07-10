import React from 'react';
export default ({data, filterText}) => {
    //data is supposed to show array
    console.log("localistData",data);
    //filterText is supposed to input from user
    console.log("localistFilter",filterText); 
    const locationList = data
        .filter(location => {      
            return location.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
        })
        .map(location =>{
            return(
                <li className="list-group-item">{location}</li>
            )
    })
    
    return(
        <div className="locations">
            <ul className = "list-group">
                {locationList}
            </ul>
        </div>
    );
}