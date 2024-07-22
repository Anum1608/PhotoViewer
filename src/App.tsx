import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {PhotoViewer} from './photoViewer/PhotoViewer.tsx'
import { ImageSelector } from './photoViewer/ImageSelector.tsx'
import { GetImageUrls } from './photoViewer/ImageSelector.tsx'

function App() {
  const [count, setCount] = useState(0)
  const imagesID = [1, 24, 32, 36, 44, 47];
  const url = GetImageUrls(imagesID);

  const [currentImage, setCurrentImage] = useState('https://picsum.photos/id/250/600/300.jpg')

  //console.log(url)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <h1>React Photo Viewer</h1>
      <PhotoViewer photoUrl={currentImage} />

      <ImageSelector urlList={url}/>
      
      {/* <button onClick={() => setCurrentImage((currentImage) => Math.min(currentImage + 1,url.length))}></button> */}

      <div>
        {url.map(imageUrl => { 
          return  <div>
                    {imageUrl}
                    <img className='thumbnail' onClick={() => setCurrentImage(imageUrl)} src={imageUrl} alt="image" />
                  </div> })}
      </div>

    </>
  )
}

export default App
