import React from 'react';
import Gallery from './assets/Gallery.png'

/*
Challenge: Build the Hero component.
Check the Figma file for the design specifics.
*/

function Hero() {
  return (
     <section className='hero'>
        <img src={Gallery} className='hero--photo' alt='Gallery'/>
        <h1 className='hero--header'>Online Experience</h1>
        <p className='hero--text'>Join unique interactive activities led by
             one-of-a-kind hosts-all without leaving home.</p>
     </section>
  )
}

export default Hero;
