
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';

// CONTEXT
import { AuthProvider } from './Components/AuthContext';
import PrivateRoute from './Components/PrivateRoute';

// USER COMPONENTS
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import RestaurantIntro from './Components/RestaurantIntro';
import HeroSection from './Components/HeroSection';
import SpecialitySection from './Components/SpecialitySection';
import TestimonialSlider from './Components/TestimonialSlider';
import ReservationForm from './Components/ReservationForm';
import ExcellenceSection from './Components/ExcellenceSection';
import Footer from './Components/Footer';
import Footer2 from './Components/Footer2';
import AboutRestaurantInfo from './Components/AboutRestaurantInfo';
import MissionVision from './Components/MissionVision';
import FoodGallery from './Components/FoodGallery';
import ContactSection from './Components/ContactSection';
import MapSection from './Components/MapSection';
import FoodItem from './Components/FoodItem';
import ProductDetail from './Components/ProductDetail';
import Wishlist from './Components/Wishlist';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Order from './Components/Order';

// AUTH COMPONENTS
import Login from './Components/Login';
import Register from './Components/Register';

// ADMIN COMPONENTS
import AdminLayout from './admin/AdminLayout';
import AdminHome from './admin/AdminHome';
import Products from './admin/Products';
import AdminMessage from './admin/AdminMessage';
import AdminOrders from './admin/AdminOrders';
import AdminUsers from './admin/AdminUsers'; 
// USER LAYOUT
const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
    <Footer2 />
  </>
);

// USER PAGES
const HomePage = () => (
  <>
    <Carousel />
    <RestaurantIntro />
    <HeroSection />
    <SpecialitySection />
    <TestimonialSlider />
    <ExcellenceSection />
  </>
);

const AboutPage = () => (
  <>
    <Carousel />
    <AboutRestaurantInfo />
    <MissionVision />
  </>
);

const Gallery = () => (
  <>
    <Carousel />
    <FoodGallery />
  </>
);

const ShopPage = () => (
  <>
    <Carousel />
    <FoodItem />
  </>
);

const Contact = () => (
  <>
    <Carousel />
    <ContactSection />
    <ReservationForm />
    <MapSection />
  </>
);

// ROUTER CONFIG
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <PrivateRoute><HomePage /></PrivateRoute> },
      { path: 'about', element: <PrivateRoute><AboutPage /></PrivateRoute> },
      { path: 'gallery', element: <PrivateRoute><Gallery /></PrivateRoute> },
      { path: 'shop', element: <PrivateRoute><ShopPage /></PrivateRoute> },
      { path: 'contact', element: <PrivateRoute><Contact /></PrivateRoute> },
      { path: 'product/:id', element: <PrivateRoute><ProductDetail /></PrivateRoute> },
      { path: 'wishlist', element: <PrivateRoute><Wishlist /></PrivateRoute> },
      { path: 'cart', element: <PrivateRoute><Cart /></PrivateRoute> },
      { path: 'checkout', element: <PrivateRoute><Checkout /></PrivateRoute> },
      { path: 'orders', element: <PrivateRoute><Order /></PrivateRoute> },
    ]
  },
  {
    path: '/admin',
    element: <PrivateRoute><AdminLayout /></PrivateRoute>,
    children: [
      { path: 'adminhome', element: <AdminHome /> },
      { path: 'products', element: <Products /> },
      { path: 'orders', element: <AdminOrders /> },
      { path: 'messages', element: <AdminMessage /> },
      { path: 'users', element: <AdminUsers /> },
    ]
  },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> }
]);

// MAIN APP
const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;