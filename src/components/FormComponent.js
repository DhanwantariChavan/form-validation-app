import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import countriesData from '../data/countriesData';
import {
  validateFirstName,
  validateLastName,
  validateUsername,
  validateEmail,
  validatePassword,
  validatePhoneNumber,
  validateCountry,
  validateCity,
  validatePanNumber,
  validateAadharNumber
} from './ValidationUtils';

const FormComponent = () => {
  const navigate = useNavigate();

  // Form data state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    country: '',
    city: '',
    panNumber: '',
    aadharNumber: ''
  });

  // Error messages state
  const [errors, setErrors] = useState({});

  // Password visibility state
  const [showPassword, setShowPassword] = useState(false);

  // Handle input changes
  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: ''
      });
    }

    // If country changes, reset city
    if (field === 'country') {
      setFormData({
        ...formData,
        [field]: value,
        city: ''
      });
    }
  };

  // Validate single field
  const validateField = (field, value) => {
    let error = '';
    
    switch (field) {
      case 'firstName':
        error = validateFirstName(value);
        break;
      case 'lastName':
        error = validateLastName(value);
        break;
      case 'username':
        error = validateUsername(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'password':
        error = validatePassword(value);
        break;
      case 'phoneNumber':
        error = validatePhoneNumber(value);
        break;
      case 'country':
        error = validateCountry(value);
        break;
      case 'city':
        error = validateCity(value);
        break;
      case 'panNumber':
        error = validatePanNumber(value);
        break;
      case 'aadharNumber':
        error = validateAadharNumber(value);
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [field]: error
    });
  };

  // Handle field blur (when user leaves the field)
  const handleBlur = (field, value) => {
    validateField(field, value);
  };

  // Check if form is valid
  const isFormValid = () => {
    const requiredFields = [
      'firstName', 'lastName', 'username', 'email', 'password',
      'phoneNumber', 'country', 'city', 'panNumber', 'aadharNumber'
    ];

    // Check if all fields are filled
    for (let field of requiredFields) {
      if (!formData[field]) {
        return false;
      }
    }

    // Check if there are any errors
    for (let field of requiredFields) {
      const error = getFieldError(field, formData[field]);
      if (error) {
        return false;
      }
    }

    return true;
  };

  // Get error for a specific field
  const getFieldError = (field, value) => {
    switch (field) {
      case 'firstName':
        return validateFirstName(value);
      case 'lastName':
        return validateLastName(value);
      case 'username':
        return validateUsername(value);
      case 'email':
        return validateEmail(value);
      case 'password':
        return validatePassword(value);
      case 'phoneNumber':
        return validatePhoneNumber(value);
      case 'country':
        return validateCountry(value);
      case 'city':
        return validateCity(value);
      case 'panNumber':
        return validatePanNumber(value);
      case 'aadharNumber':
        return validateAadharNumber(value);
      default:
        return '';
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const newErrors = {};
    Object.keys(formData).forEach(field => {
      const error = getFieldError(field, formData[field]);
      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);

    // If no errors, navigate to display page
    if (Object.keys(newErrors).length === 0) {
      navigate('/display', { state: { formData } });
    }
  };

  // Get cities for selected country
  const getCities = () => {
    if (formData.country && countriesData[formData.country]) {
      return countriesData[formData.country].cities;
    }
    return [];
  };

  // Get country code for selected country
  const getCountryCode = () => {
    if (formData.country && countriesData[formData.country]) {
      return countriesData[formData.country].code;
    }
    return '';
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        
        {/* First Name */}
        <div className="form-group">
          <label>First Name *</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            onBlur={(e) => handleBlur('firstName', e.target.value)}
            className={errors.firstName ? 'error-input' : ''}
          />
          {errors.firstName && <span className="error-message">{errors.firstName}</span>}
        </div>

        {/* Last Name */}
        <div className="form-group">
          <label>Last Name *</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            onBlur={(e) => handleBlur('lastName', e.target.value)}
            className={errors.lastName ? 'error-input' : ''}
          />
          {errors.lastName && <span className="error-message">{errors.lastName}</span>}
        </div>

        {/* Username */}
        <div className="form-group">
          <label>Username *</label>
          <input
            type="text"
            value={formData.username}
            onChange={(e) => handleInputChange('username', e.target.value)}
            onBlur={(e) => handleBlur('username', e.target.value)}
            className={errors.username ? 'error-input' : ''}
          />
          {errors.username && <span className="error-message">{errors.username}</span>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            onBlur={(e) => handleBlur('email', e.target.value)}
            className={errors.email ? 'error-input' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label>Password *</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              onBlur={(e) => handleBlur('password', e.target.value)}
              className={errors.password ? 'error-input' : ''}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label>Phone Number *</label>
          <div className="phone-container">
            <span className="country-code">{getCountryCode()}</span>
            <input
              type="text"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              onBlur={(e) => handleBlur('phoneNumber', e.target.value)}
              className={errors.phoneNumber ? 'error-input' : ''}
              placeholder="Enter 10 digit number"
            />
          </div>
          {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
        </div>

        {/* Country */}
        <div className="form-group">
          <label>Country *</label>
          <select
            value={formData.country}
            onChange={(e) => handleInputChange('country', e.target.value)}
            onBlur={(e) => handleBlur('country', e.target.value)}
            className={errors.country ? 'error-input' : ''}
          >
            <option value="">Select Country</option>
            {Object.keys(countriesData).map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
          {errors.country && <span className="error-message">{errors.country}</span>}
        </div>

        {/* City */}
        <div className="form-group">
          <label>City *</label>
          <select
            value={formData.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
            onBlur={(e) => handleBlur('city', e.target.value)}
            className={errors.city ? 'error-input' : ''}
            disabled={!formData.country}
          >
            <option value="">Select City</option>
            {getCities().map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          {errors.city && <span className="error-message">{errors.city}</span>}
        </div>

        {/* PAN Number */}
        <div className="form-group">
          <label>PAN Number *</label>
          <input
            type="text"
            value={formData.panNumber}
            onChange={(e) => handleInputChange('panNumber', e.target.value.toUpperCase())}
            onBlur={(e) => handleBlur('panNumber', e.target.value)}
            className={errors.panNumber ? 'error-input' : ''}
            placeholder="ABCDE1234F"
            maxLength="10"
          />
          {errors.panNumber && <span className="error-message">{errors.panNumber}</span>}
        </div>

        {/* Aadhar Number */}
        <div className="form-group">
          <label>Aadhar Number *</label>
          <input
            type="text"
            value={formData.aadharNumber}
            onChange={(e) => handleInputChange('aadharNumber', e.target.value)}
            onBlur={(e) => handleBlur('aadharNumber', e.target.value)}
            className={errors.aadharNumber ? 'error-input' : ''}
            placeholder="123456789012"
            maxLength="12"
          />
          {errors.aadharNumber && <span className="error-message">{errors.aadharNumber}</span>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`submit-button ${!isFormValid() ? 'disabled' : ''}`}
          disabled={!isFormValid()}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;