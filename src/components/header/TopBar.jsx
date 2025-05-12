import React from 'react'
import Container from '../commonlayout/Container'

const TopBar = () => {
  return (
    <div className='border-b border-[rgba(48,48,48,0.25)]  border-solid   '>
      <Container>
        <div className='flex items-center justify-between '>
          <div>Left</div>
          <div>Right</div>
        </div>
      </Container>
        
      
    </div>
  )
}

export default TopBar
