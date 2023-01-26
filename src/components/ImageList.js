import React from 'react'
import './ImageList.css'
import ImageShow from './ImageShow'
const ImageList = ({ images }) => {
  const renderImages =  images.map(image => {
      return <ImageShow key={image.id} image={image} />
    })
  
  return (
    <div className='image-list'>
     {renderImages}
    </div>
  )
}

export default ImageList
