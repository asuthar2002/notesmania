import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import { verifyToken } from './features/auth/authThunks';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

// ✅ Layout and Route Guards
import Layout from './layout/layout';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

// ✅ Pages & Components
import Loader from './components/loader/loader';
import SingleVideoSection from './pages/heroPage/singleVideoSection/SingleVideoSection';
import SearchHeader from './pages/searchHeader/SearchHeader';
import CategoriesPage from './pages/subPage/categoriesPage/CategoriesPage';
import CategorySlider from './pages/subPage/categorySlider/CategorySlider';
import TourScheduleBanner from './pages/subPage/tourScheduleBanner/TourScheduleBanner';
import ProudStatsSection from './pages/subPage/proudStatsSection/ProudStatsSection';
import LoginPage from './pages/auth/loginPage/LoginPage';
import SignUpPage from './pages/auth/loginPage/signupPage/SignUpPage';
import HomePage from './pages/HomePage';
import Courses from './pages/coursesPage.jsx/CoursesPage';
import ForgotPassword from './pages/auth/loginPage/ForgotPassword';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import UserPage from './pages/userPage/UserPage';
import EditProfileForm from './components/comm/userProfile/editProfile/EditProfileForm';

function App() {
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        {/* ✅ Public layout-wrapped pages */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/video" element={<SingleVideoSection />} />
          <Route path="/search" element={<SearchHeader />} />
          <Route path="/tour-schedule" element={<TourScheduleBanner />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/stats" element={<ProudStatsSection />} />
        </Route>

        {/* ✅ Public auth-only routes */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        {/* ✅ Protected routes */}
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/user" element={<UserPage />} />
            <Route path="/edit-profile" element={<EditProfileForm />} />
          </Route>
        </Route>

        {/* ✅ Catch-all for 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
