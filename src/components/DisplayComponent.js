import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import countriesData from '../data/countriesData';

const DisplayComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get form data from navigation state
  const formData = location.state?.formData;

  // If no data, redirect to form
  if (!formData) {
    navigate('/');
    return null;
  }

  // Get country code for display
  const getCountryCode = () => {
    if (formData.country && countriesData[formData.country]) {
      return countriesData[formData.country].code;
    }
    return '';
  };

  // Go back to form
  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="display-container">
      <h2>Registration Successful!</h2>
      <p className="success-message">Your details have been submitted successfully.</p>
      
      <div className="details-card">
        <h3>Submitted Details:</h3>
        
        <div className="detail-row">
          <span className="label">First Name:</span>
          <span className="value">{formData.firstName}</span>
        </div>
        
        <div className="detail-row">
          <span className="label">Last Name:</span>
          <span className="value">{formData.lastName}</span>
        </div>
        
        <div className="detail-row">
          <span className="label">Username:</span>
          <span className="value">{formData.username}</span>
        </div>
        
        <div className="detail-row">
          <span className="label">Email:</span>
          <span className="value">{formData.email}</span>
        </div>
        
        <div className="detail-row">
          <span className="label">Password:</span>
          <span className="value">••••••••</span>
        </div>
        
        <div className="detail-row">
          <span className="label">Phone Number:</span>
          <span className="value">{getCountryCode()} {formData.phoneNumber}</span>
        </div>
        
        <div className="detail-row">
          <span className="label">Country:</span>
          <span className="value">{formData.country}</span>
        </div>
        
        <div className="detail-row">
          <span className="label">City:</span>
          <span className="value">{formData.city}</span>
        </div>
        
        <div className="detail-row">
          <span className="label">PAN Number:</span>
          <span className="value">{formData.panNumber}</span>
        </div>
        
        <div className="detail-row">
          <span className="label">Aadhar Number:</span>
          <span className="value">{formData.aadharNumber}</span>
        </div>
      </div>
      
      <button className="back-button" onClick={handleGoBack}>
        Fill Another Form
      </button>
    </div>
  );
};

export default DisplayComponent;