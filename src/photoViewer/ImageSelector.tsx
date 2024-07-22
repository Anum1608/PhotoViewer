import React from "react";  // import React (to provide access to TSX)


export function ImageSelector(props) {    // declare and export new function called 'PhotoViewer'
    return (                
        <div>               
            Hello World ! in ImageSelector
        </div>
    );
}

export function GetImageUrls(imagesID:any) {
    const urls = [];
    for (let i = 0; i < imagesID.length; i++) {
        urls.push(`https://picsum.photos/id/${imagesID[i]}/600/300.jpg`)
    }
    return urls;
}