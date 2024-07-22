

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

  console.log(url)

  return (
    <>


      <h1>React Photo Viewer</h1>
      <PhotoViewer photoUrl='https://picsum.photos/id/230/200/300' />
      <ImageSelector/>
      <div>{url}</div>


    </>
  )
}