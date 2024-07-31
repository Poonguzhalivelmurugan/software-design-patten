import React, { useState } from 'react';
import './admin.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import adminImage from '../assets/admin'; // Add the correct path for the admin image
import revenueImage from '../assets/revenue.jpg';
import salesImage from '../assets/sale.jpg';
import house1 from '../assets/house1.jpg';
import house2 from '../assets/house 2.jpg';
import house3 from '../assets/house3.jpg';

function Admin() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!isUserDropdownOpen);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <>
            <section className="stats-section">
              <div className="stat-card properties">
                <h3>Total Properties</h3>
                <p>120</p>
              </div>
              <div className="stat-card active-agents">
                <h3>Active Agents</h3>
                <p>50</p>
              </div>
              <div className="stat-card inquiries">
                <h3>Inquiries</h3>
                <p>1.2k</p>
              </div>
            </section>
            <section className="income-section">
              <div className="income-chart">
                <h3>Total Revenue</h3>
                <img src={revenueImage} alt="Revenue Chart" />
              </div>
              <div className="sales-chart">
                <h3>Sales by Property</h3>
                <img src={salesImage} alt="Sales by Property Chart" />
              </div>
            </section>
          </>
        );
      case 'properties':
        return (
          <section className="property-list">
            <h3>Property List</h3>
            <table>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Status</th>
                  <th>Price</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="property-info">
                      <p>Luxury Villa</p>
                      <img src={house1} alt="Luxury Villa" />
                    </div>
                  </td>
                  <td>For Sale</td>
                  <td>$1,200,000</td>
                  <td>Los Angeles, CA</td>
                </tr>
                <tr>
                  <td>
                    <div className="property-info">
                      <p>Modern Apartment</p>
                      <img src={house2} alt="Modern Apartment" />
                    </div>
                  </td>
                  <td>For Rent</td>
                  <td>$3,000/month</td>
                  <td>New York, NY</td>
                </tr>
                <tr>
                  <td>
                    <div className="property-info">
                      <p>Cozy Cottage</p>
                      <img src={house3} alt="Cozy Cottage" />
                    </div>
                  </td>
                  <td>For Sale</td>
                  <td>$450,000</td>
                  <td>Miami, FL</td>
                </tr>
              </tbody>
            </table>
          </section>
        );
      case 'customers':
        return (
          <section className="property-list">
            <h3>Customers List</h3>
            <table>
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>john.doe@example.com</td>
                  <td>(123) 456-7890</td>
                  <td>Active</td>
                </tr>
                <tr>
                  <td>Jane Smith</td>
                  <td>jane.smith@example.com</td>
                  <td>(987) 654-3210</td>
                  <td>Inactive</td>
                </tr>
                <tr>
                  <td>Robert Brown</td>
                  <td>robert.brown@example.com</td>
                  <td>(555) 555-5555</td>
                  <td>Active</td>
                </tr>
              </tbody>
            </table>
          </section>
        );
      case 'agents':
        return (
          <section className="property-list">
            <h3>Agents List</h3>
            <table>
              <thead>
                <tr>
                  <th>Agent Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Properties</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Alice Johnson</td>
                  <td>alice.johnson@example.com</td>
                  <td>(321) 654-0987</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Mark Wilson</td>
                  <td>mark.wilson@example.com</td>
                  <td>(789) 012-3456</td>
                  <td>15</td>
                </tr>
                <tr>
                  <td>Lisa White</td>
                  <td>lisa.white@example.com</td>
                  <td>(456) 789-0123</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
          </section>
        );
      case 'inquiries':
        return (
          <section className="property-list">
            <h3>Inquiries List</h3>
            <table>
              <thead>
                <tr>
                  <th>Inquiry ID</th>
                  <th>Customer Name</th>
                  <th>Property</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>John Doe</td>
                  <td>Luxury Villa</td>
                  <td>2024-07-28</td>
                  <td>Open</td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>Jane Smith</td>
                  <td>Modern Apartment</td>
                  <td>2024-07-29</td>
                  <td>Closed</td>
                </tr>
                <tr>
                  <td>003</td>
                  <td>Robert Brown</td>
                  <td>Cozy Cottage</td>
                  <td>2024-07-30</td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </table>
          </section>
        );
      case 'settings':
        return (
          <section className="property-list">
            <h3>Settings</h3>
            <div className="settings-form">
              <div className="form-group">
                <label>Site Title</label>
                <input type="text" placeholder="Real Estate Management" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="admin@example.com" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="(123) 456-7890" />
              </div>
              <button type="submit">Save Settings</button>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="admin-dashboard">
      <header className="main-header">
        <i className="fas fa-bars menu-icon" onClick={toggleSidebar}></i>
        <h1>Hey There, Welcome back <span>🎉</span></h1>
        <div className="header-right">
          <select>
            <option>Last 30 days</option>
            <option>Last 60 days</option>
            <option>Last 90 days</option>
          </select>
          <input type="text" placeholder="Search" />
          <i className="fas fa-bell"></i>
          <i className="fas fa-user-circle" onClick={toggleUserDropdown}></i>
          {isUserDropdownOpen && (
            <div className="user-dropdown">
              <div className="user-info">
                <img src={adminImage} alt="User Avatar" className="admin-avatar" />
                <p className="user-name">Poonguzhali</p>
                <p className="user-email">poonguzhalidams@gmail.com</p>
              </div>
            </div>
          )}
        </div>
      </header>

      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Real Estate Management</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className={activeSection === 'dashboard' ? 'active' : ''} onClick={() => setActiveSection('dashboard')}>
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </li>
            <li className={activeSection === 'properties' ? 'active' : ''} onClick={() => setActiveSection('properties')}>
              <i className="fas fa-building"></i> Properties
            </li>
            <li className={activeSection === 'customers' ? 'active' : ''} onClick={() => setActiveSection('customers')}>
              <i className="fas fa-users"></i> Customers
            </li>
            <li className={activeSection === 'agents' ? 'active' : ''} onClick={() => setActiveSection('agents')}>
              <i className="fas fa-user-tie"></i> Agents
            </li>
            <li className={activeSection === 'inquiries' ? 'active' : ''} onClick={() => setActiveSection('inquiries')}>
              <i className="fas fa-file-alt"></i> Inquiries
            </li>
            <li className={activeSection === 'settings' ? 'active' : ''} onClick={() => setActiveSection('settings')}>
              <i className="fas fa-cog"></i> Settings
            </li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <div className="user-info">
            <img src={adminImage} alt="User Avatar" className="admin-avatar" />
            <p>Poonguzhali</p>
            <p>poonguzhalidams@gmail.com</p>
          </div>
        </div>
      </aside>

      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default Admin;
