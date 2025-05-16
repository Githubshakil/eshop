import React from 'react'
import ProductLayout from './commonlayout/ProductLayout'
import  Container  from '../components/commonlayout/Container'

const FeatureProduct = () => {
  return (
    <Container>
            
        <div className='flex gap-1 mb-[80px]'>
            <ProductLayout /> 
            <ProductLayout /> 
            <ProductLayout /> 
            <ProductLayout /> 
            <ProductLayout /> 
        </div>
    </Container>
  )
}

export default FeatureProduct