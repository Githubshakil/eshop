import React, { useState } from 'react'
import Container from '../../src/components/commonlayout/Container'
import PriceRange from '../components/ProductsPage/PriceRange'


const ProductList = () => {
  



  return (
    <>
    <Container>
      <div className='flex'>
       <div>
         <PriceRange />
       </div>



        <div className='w-[80%]'>
          
        </div>
      </div>
    </Container>
    </>
  )
}

export default ProductList