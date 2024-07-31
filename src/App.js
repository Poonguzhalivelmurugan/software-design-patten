import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RentPage from './components/rent';
import { PropertyProvider } from './context/propertycontext'; // Import the context provider
import BuyPage from './pages/Buy';
import Home from './pages/Home';
import LoginPage from './pages/Login';
import Navbar from './pages/Navbar';
import Property from './pages/property';
import SellPage from './pages/sell';
import SignupPage from './pages/signup';
import AdminDashboard from './context/admin';
import { Outlet } from 'react-router-dom';
import AboutPage from './components/about';
import ContactPage from './components/contact';
import GoogleMapComponent from './components/googlemap';
import UserDashboard from './components/userdas';
import PropertyDetails from './context/prodetails';
import RentPropDetail from './components/rentprop';
import RentPaymentPage from './components/rentpayment';
import ReportIssuePage from './components/reportissue';
function App() {
  return (
    <PropertyProvider>
      <div className="App">
        <Navbar />
          <Outlet />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:propertyId" element={<PropertyDetails />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/property" element={<Property/>}/>
          <Route path="/buy" element={<BuyPage/>}/>
          <Route path="/sell" element={<SellPage/>}/>
          <Route path="/rent" element={<RentPage/>}/>
          <Route path="/rentprop-details/:propertyId" element={<RentPropDetail />} />
          <Route path="/admin" element={<AdminDashboard/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/my-account" element={<UserDashboard/>}/>
          <Route path="/google" element={<GoogleMapComponent/>}/>
          {/* <Route path="/propertydetails" element={<PropertyDetails}/> */}
          <Route path="/rent-payment" element={<RentPaymentPage/>}/>
          <Route path="/report-issue" element={<ReportIssuePage/>}/>
        </Routes>
      </div>
    </PropertyProvider>
  );
}

export default App;
