import React from 'react';
import cardImage from './assets/player.png'
import Stats from './assets/stats.png'

function Card() {
  return(
      <div className='card'>
          <img src={cardImage} className='card--image' />
          <div className='card--stats'>
              <img src={Stats} className='card--star'/>
              <span className='gray'>5.0</span>
              <span className='gray'>(6)</span>
              <span className='gray'>USA</span>
          </div>
          <p>Life Lessons with Katie Zaferes</p>
          <p><span className='bold'>From $136</span> / person</p>
          <p>Hello World</p>
      </div>
  )
}

export default Card;
