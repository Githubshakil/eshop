import React from 'react'
import ProductLayout from './commonlayout/ProductLayout'
import  Container  from '../components/commonlayout/Container'

const FeatureProduct = () => {
  return (
    <Container>
            
        <div className='flex gap-1 mb-[80px]'>
            <ProductLayout percentTag = {true} category = "LAPTOP" title= "S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating = "3" /> 
            <ProductLayout percentTag = {false} category = "LAPTOP" title= "S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating = "5"/> 
            <ProductLayout percentTag = {false} category = "LAPTOP" title= "S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating = "4" /> 
            
        </div>
    </Container>
  )
}

export default FeatureProduct