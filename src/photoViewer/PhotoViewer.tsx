import React from "react";  // import React (to provide access to TSX)
import './PhotoViewer.css'

export function PhotoViewer(props:any) {    // declare and export new function called 'PhotoViewer'
    return (                
        <div>               
            <img className="displayImage" src={props.photoUrl} alt="image" />
        </div>
    );
}