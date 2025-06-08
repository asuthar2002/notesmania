import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
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
import UserPage from './pages/userPage/UserPage'
import ForgotPassword from './pages/auth/loginPage/ForgotPassword'
import NotFoundPage from './pages/notFoundPage/NotFoundPage'



function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video" element={<SingleVideoSection />} />
        <Route path="/search" element={<SearchHeader />} />
        <Route path="/tour-schedule" element={<TourScheduleBanner />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/stats" element={<ProudStatsSection />} />


        // Auth Pages

        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPage/>} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

      // NotFoundPage

        <Route path='*' element={<NotFoundPage/>}/>

      </Routes>
    </Router>
  )
}

export default App
