import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import propertiesImage from '../assets/logo1.png';
import userAvatar from '../assets/pro1.jpg'; // Adjust the path as needed
import messagesImage from '../assets/pro2.jpg';
import './userdas.css';

function UserDashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!isUserDropdownOpen);
  };

  return (
    <div className="user-dashboard">
      <header className="main-header">
        <i className="fas fa-bars menu-icon" onClick={toggleSidebar}></i>
        <h1>Welcome Back, <span>🎉</span></h1>
        <div className="header-right">
          <input type="text" placeholder="Search" />
          <i className="fas fa-bell"></i>
          <i className="fas fa-user-circle" onClick={toggleUserDropdown}></i>
          {isUserDropdownOpen && (
            <div className="user-dropdown">
              <div className="user-info">
                <img src={userAvatar} alt="User Avatar" className="user-avatar" />
                <p className="user-name">John Doe</p>
                <p className="user-email">john.doe@example.com</p>
              </div>
              <Link to="/account-settings" className="dropdown-item">Account Settings</Link>
              <Link to="/logout" className="dropdown-item">Logout</Link>
            </div>
          )}
        </div>
      </header>

      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>My Dashboard</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className="active"><i className="fas fa-tachometer-alt"></i> Dashboard</li>
            <li><i className="fas fa-home"></i> My Properties</li>
            <li><i className="fas fa-search"></i> Saved Searches</li>
            <li><i className="fas fa-envelope"></i> Messages</li>
            <li><i className="fas fa-cog"></i> Account Settings</li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <div className="user-info">
            <img src={userAvatar} alt="User Avatar" className="user-avatar" />
            <p>John Doe</p>
            <p>john.doe@example.com</p>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <section className="overview-section">
          <div className="overview-card properties">
            <h3>My Properties</h3>
            <img src={propertiesImage} alt="Properties Overview" />
            <p>Manage and view your properties.</p>
          </div>
          <div className="overview-card messages">
            <h3>Messages</h3>
            <img src={messagesImage} alt="Messages Overview" />
            <p>Check your latest messages and inquiries.</p>
          </div>
        </section>
        <section className="stats-section">
          <div className="stat-card pending-offers">
            <h3>Pending Offers</h3>
            <p>15</p>
          </div>
          <div className="stat-card active-listings">
            <h3>Active Listings</h3>
            <p>25</p>
          </div>
          <div className="stat-card sold-properties">
            <h3>Sold Properties</h3>
            <p>10</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default UserDashboard;
