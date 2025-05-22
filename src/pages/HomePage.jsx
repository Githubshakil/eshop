import React from 'react'
import Banner from '../components/homePage/Banner'
import FacilitySection from '../components/homePage/FacilitySection'
import FeatureProduct from '../components/homePage/FeatureProduct'
import OfferSection from '../components/homePage/OfferSection'
import NewProducts from '../components/homePage/NewProducts'
import SpringSale from '../components/homePage/SpringSale'

const HomePage = () => {
  return (
    <>
    <Banner />
    <FacilitySection />
    <FeatureProduct />
    <OfferSection />
    <NewProducts />
    <SpringSale />
    </>
  )
}

export default HomePage