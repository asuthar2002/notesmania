import React from 'react'
import HeroPage from './heroPage/HeroPage'
import CategoriesPage from './subPage/categoriesPage/CategoriesPage'
import CategorySlider from './subPage/categorySlider/CategorySlider'
import Courses from './coursesPage.jsx/CoursesPage'
import PromoCard from '../components/comm/promoCard/PromoCard'
import LiveCoursesSlider from '../components/comm/liveCoursesSlider/LiveCoursesSlider'
import MissionFeatures from '../components/comm/missionFeatures/MissionFeatures'
import PhotoGallery from '../components/comm/photoGallery/PhotoGallery'
import Header from '../components/comm/header/header'
import BlogSlider from '../components/comm/blog/BlogSlider'
import TestmonialSlider from '../components/comm/testmonials/TestmonialSlider'
import Footer from '../components/comm/footer/Footer'

const HomePage = () => {


    
  return (
<>
<div className='px-7'>
  <Header/>
<HeroPage/>
<CategorySlider/>
<CategoriesPage />
<Courses/>
<LiveCoursesSlider/>
{/* <MissionFeatures/> */}
<PhotoGallery/>
<BlogSlider/>
<PromoCard/>
<TestmonialSlider/>
<Footer/>
</div>
</>
  )
}

export default HomePage
