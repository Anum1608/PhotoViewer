import React from "react";  // import React (to provide access to TSX)
import './ImageSelector.css'

const imageUrls = ['https://picsum.photos/id/1/600/300.jpg',
                    'https://picsum.photos/id/24/600/300.jpg',
                'https://picsum.photos/id/30/600/300.jpg',
            'https://picsum.photos/id/56/600/300.jpg',
        'https://picsum.photos/id/65/600/300.jpg']

interface ImageSelectorProps{
    setCurrentImageFunction : (url:string)=>void;
}
   

//export function ImageSelector({urlList}: {urlList: string[]}, prop:ImageSelectorProps) {
export function ImageSelector(prop:ImageSelectorProps) {    
    
    return (                

        <div className="thumbnailList">
            {imageUrls.map(imageUrl => { 
                return          <div>
                                <img className='thumbnail' onClick={() => prop.setCurrentImageFunction(imageUrl)} src={imageUrl} />
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