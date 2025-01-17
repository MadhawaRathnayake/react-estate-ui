import { useState } from 'react'
import './slider.scss'

function Slider({ images }) {
    const [imageIndex, setImageIndex] = useState(null);
    const changeSlide = (direction)=>{
        if (direction === "left"){
            if(imageIndex===0){
                setImageIndex(images.length-1)
            }else{
                setImageIndex(imageIndex-1)
            }
        }else{
            if(imageIndex===images.length-1){
                setImageIndex(0)
            }else{
                setImageIndex(imageIndex+1)
            }
        }
    }

    return (
        <div className='slider'>
            {imageIndex !== null && (<div className='fullSlider'>
                <div className='arrow'>
                    <img src='/arrow.png' onClick={()=>changeSlide("left")}/>
                </div>
                <div className='imageContainer'>
                    <img src={images[imageIndex]}/>
                </div>
                <div className='arrow'>
                    <img src='/arrowRight.png' className='right' onClick={()=>changeSlide("right")}/>
                </div>
                <div className='close' onClick={()=>setImageIndex(null)}>x</div>
            </div>)}
            <div className='bigImage'>
                <img src={images[0]} onClick={()=>setImageIndex(0)}/>
            </div>
            <div className='smallImage'>
                {images.slice(1).map((image, index) => (
                    <img src={image} key={index} onClick={()=>setImageIndex(index + 1)}/>
                ))}
            </div>
        </div>
    )
}

export default Slider