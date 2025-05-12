import React from 'react'
import Container from '../commonlayout/Container'

const TopBar = () => {
  return (
    <div className='border-b border-[rgba(48,48,48,0.25)]  border-solid   '>
      <Container>
        <div className='flex items-center justify-between '>
          <div>
            <a href="https://maps.app.goo.gl/gZ7SG15p6xTnDNrT8" target='_blank'>123 Main Street, Anytown USA</a>
            <a href="tel: +1 (555) 123-4567">+1 (555) 123-4567</a>
          </div>
          <div>Right</div>
        </div>
      </Container>
        
      
    </div>
  )
}

export default TopBar
