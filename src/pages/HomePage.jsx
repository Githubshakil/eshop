import React from 'react'
import Banner from '../components/homePage/Banner'
import FacilitySection from '../components/homePage/FacilitySection'
import FeatureProduct from '../components/homePage/FeatureProduct'
import OfferSection from '../components/homePage/OfferSection'
import NewProducts from '../components/homePage/NewProducts'
import SpringSale from '../components/homePage/SpringSale'
import BestSellerSection from '../components/homePage/BestSellerSection'
import FaqSection from '../components/homePage/faq/FaqSection'
import TechTalkSection from '../components/homePage/TechTalkSection'

const HomePage = () => {
  return (
    <>
    <Banner />
    <FacilitySection />
    <FeatureProduct />
    <OfferSection />
    <NewProducts />
    <SpringSale />
    <BestSellerSection />
    <FaqSection />
    <TechTalkSection />
    </>
  )
}

export default HomePage