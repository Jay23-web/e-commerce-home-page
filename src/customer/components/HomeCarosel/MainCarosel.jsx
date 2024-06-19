import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCaroselData';

export const MainCarosel = () => {
    
    
const items =  MainCarouselData.map((item)=> <img className='cursor-pointer' src={item.image} role='presentetion'  alt='' />)

  return (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        // disableDotsControls
        autoPlayInterval={4000}
        infinite
    />
  )
}
