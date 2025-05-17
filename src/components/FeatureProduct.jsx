import React from 'react'
import ProductLayout from './commonlayout/ProductLayout'
import  Container  from '../components/commonlayout/Container'

const FeatureProduct = () => {
  return (
    <Container>
            
        <div className='flex gap-1 mb-[80px]'>
            <ProductLayout percentValue="40%" percentTag = {true} category = "LAPTOP" title= "S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating = "3" totalRating="(100)" /> 
            <ProductLayout percentValue="40%" percentTag = {false} category = "LAPTOP" title= "S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating = "2" totalRating="(10)"/> 
            <ProductLayout percentValue="40%" percentTag = {false} category = "LAPTOP" title= "S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating = "3" totalRating="(60)" /> 
            <ProductLayout percentValue="50%" percentTag = {true} category = "LAPTOP" title= "S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating = "5" totalRating="(200)"/> 
            <ProductLayout percentValue="40%" percentTag = {false} category = "LAPTOP" title= "S21 Laptop Ultra HD LED Screen Feature 2023 ..." rating = "4" totalRating="(160)" /> 
            
        </div>
    </Container>
  )
}

export default FeatureProduct