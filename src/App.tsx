import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {PhotoViewer} from './photoViewer/PhotoViewer.tsx'
import { ImageSelector } from './photoViewer/ImageSelector.tsx'
import { GetImageUrls } from './photoViewer/ImageSelector.tsx'

//TOREAD : https://react.dev/learn/sharing-state-between-components
//TOREAD : https://react.dev/learn/responding-to-events#passing-event-handlers-as-props





function App() {
  const [count, setCount] = useState(0)
  const imagesID = [1, 24, 32, 36, 44, 47];
  const url = GetImageUrls(imagesID);

  const [currentImage, setCurrentImage] = useState('https://picsum.photos/id/250/600/300.jpg')
  function setCurrentImageFunction(url:string){
    setCurrentImage(url)
  }
  //console.log(url)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>  
      </div>

      <h1>React Photo Viewer</h1>
      <PhotoViewer photoUrl={currentImage} />
      <div className='imageSelector'>
        <ImageSelector setCurrentImageFunction={setCurrentImageFunction} />
      </div>
      {/* <ImageSelector urlList={url}  /> */}
      

      

    </>
  )
}

export default App
