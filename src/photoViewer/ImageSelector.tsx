import React from "react";  // import React (to provide access to TSX)
import { useState } from 'react'
import './ImageSelector.css'


export const [currentImage, setCurrentImage] = useState('https://picsum.photos/id/250/600/300.jpg')
   


export function ImageSelector({urlList}: {urlList: string[]}) {    
    
    return (                

        <div>
            {urlList.map(imageUrl => { 
                return          <div>
                                <img className='thumbnail' onClick={() => setCurrentImage(imageUrl)} src={imageUrl} />
                                </div> })}
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