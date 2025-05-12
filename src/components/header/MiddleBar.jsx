import React from 'react'
import Container from '../commonlayout/Container'

const MiddleBar = () => {
  return (
    <Container>
      <div className='flex justify-between items-center p-[32px]'>
        <div>
          <img src="images/logo.png" alt="logo" />
        </div>
        <div>Others</div>
      </div>
    </Container>
  )
}

export default MiddleBar