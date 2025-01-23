import React from 'react'
import "./ImagePreview.css"
import { IoIosArrowForward } from "react-icons/io";
import imagePreview1 from"../../../../assets/Description1.png"
import imagePreview2 from"../../../../assets/Description2.png"
import imagePreview3 from"../../../../assets/Description3.png"
import imagePreview4 from"../../../../assets/Description4.png"
import imagePreview5 from"../../../../assets/Description5.png"
import imagePreview6 from"../../../../assets/Description6.png"

const ImagePreview = () => {
  return (
    <div className='image-preview'>
        <IoIosArrowForward className='btn-forward'/>
        <img src={imagePreview1} alt="preview_images1" />
        <img src={imagePreview2} alt="preview_images2" />
        <img src={imagePreview3} alt="preview_images3" />
        <img src={imagePreview4} alt="preview_images4" />
        <img src={imagePreview5} alt="preview_images5" />
        <img src={imagePreview6} alt="preview_images6" />
        
    </div>
  )
}

export default ImagePreview