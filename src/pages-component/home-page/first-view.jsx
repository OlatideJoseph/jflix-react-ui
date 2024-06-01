import * as React from 'react'
import Button from '../../components/buttons/button.jsx'
import landingImage from '../../assets/landing-image.webp'
import './first-view.css'

const FirstView = () => {
  return (
    <section
      className='first-view'
      id='first-view'
    >
      <div
        className='fvfi'
      >
        <img
          className='landing-image'
          src={landingImage}
          alt='land-image'
        />
      </div>
      <div
        className='fvsi'
      >
        <p>Description & Button</p>
        <Button className='landing-btn'>
          Start
        </Button>
      </div>
    </section>
  )
}

export default FirstView 