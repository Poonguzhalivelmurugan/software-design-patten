// src/components/ReportIssuePage.js
import React, { useState } from 'react';
import './reportissue.css'; // Ensure this CSS file is created and included

const ReportIssuePage = () => {
  const [issueData, setIssueData] = useState({
    issue: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIssueData({ ...issueData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle issue submission
    console.log('Issue Data:', issueData);
  };

  return (
    <div className="report-issue-page">
      <h1>Report Issue</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="issue">Issue:</label>
          <input
            type="text"
            id="issue"
            name="issue"
            value={issueData.issue}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={issueData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Issue</button>
      </form>
    </div>
  );
};

export default ReportIssuePage;
