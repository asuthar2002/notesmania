import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'

// Pages & Components
import Header from './components/comm/header/header'
import SubHeader from './components/comm/subHeader/SubHeader'
import HeroPage from './pages/heroPage/HeroPage'
import SingleVideoSection from './pages/heroPage/singleVideoSection/SingleVideoSection'
import SearchHeader from './pages/searchHeader/SearchHeader'
import CategoriesPage from './pages/subPage/categoriesPage/CategoriesPage'
import CategorySlider from './pages/subPage/categorySlider/CategorySlider'
import TourScheduleBanner from './pages/subPage/tourScheduleBanner/TourScheduleBanner'
import ProudStatsSection from './pages/subPage/proudStatsSection/ProudStatsSection'
import LoginPage from './pages/auth/loginPage/LoginPage'
import SignUpPage from './pages/auth/loginPage/signupPage/SignUpPage'
import HomePage from './pages/HomePage'
import Courses from './pages/coursesPage.jsx/CoursesPage'


function App() {
  return (
    <Router>
      {/* Optional: You can place <Header /> and <SubHeader /> outside Routes if they should always be visible */}
      {/* <SubHeader />
      <Header /> */}
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video" element={<SingleVideoSection />} />
        <Route path="/search" element={<SearchHeader />} />
        <Route path="/tour-schedule" element={<TourScheduleBanner />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/stats" element={<ProudStatsSection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </Router>
  )
}

export default App
