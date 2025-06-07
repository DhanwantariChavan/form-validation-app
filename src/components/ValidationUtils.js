// Validation functions for form fields

// Check if first name is valid
export const validateFirstName = (firstName) => {
  if (!firstName) {
    return 'First name is required';
  }
  if (firstName.length < 2) {
    return 'First name must be at least 2 characters';
  }
  if (!/^[a-zA-Z]+$/.test(firstName)) {
    return 'First name should contain only letters';
  }
  return '';
};

// Check if last name is valid
export const validateLastName = (lastName) => {
  if (!lastName) {
    return 'Last name is required';
  }
  if (lastName.length < 2) {
    return 'Last name must be at least 2 characters';
  }
  if (!/^[a-zA-Z]+$/.test(lastName)) {
    return 'Last name should contain only letters';
  }
  return '';
};

// Check if username is valid
export const validateUsername = (username) => {
  if (!username) {
    return 'Username is required';
  }
  if (username.length < 3 || username.length > 20) {
    return 'Username must be between 3 and 20 characters';
  }
  if (!/^[a-zA-Z0-9]+$/.test(username)) {
    return 'Username should contain only letters and numbers';
  }
  return '';
};

// Check if email is valid
export const validateEmail = (email) => {
  if (!email) {
    return 'Email is required';
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return 'Please enter a valid email address';
  }
  return '';
};

// Check if password is valid
export const validatePassword = (password) => {
  if (!password) {
    return 'Password is required';
  }
  if (password.length < 8) {
    return 'Password must be at least 8 characters';
  }
  if (!/(?=.*[a-z])/.test(password)) {
    return 'Password must contain at least one lowercase letter';
  }
  if (!/(?=.*[A-Z])/.test(password)) {
    return 'Password must contain at least one uppercase letter';
  }
  if (!/(?=.*\d)/.test(password)) {
    return 'Password must contain at least one number';
  }
  if (!/(?=.*[@$!%*?&])/.test(password)) {
    return 'Password must contain at least one special character';
  }
  return '';
};

// Check if phone number is valid
export const validatePhoneNumber = (phoneNumber) => {
  if (!phoneNumber) {
    return 'Phone number is required';
  }
  if (!/^\d{10}$/.test(phoneNumber)) {
    return 'Phone number must be exactly 10 digits';
  }
  return '';
};

// Check if country is selected
export const validateCountry = (country) => {
  if (!country) {
    return 'Please select a country';
  }
  return '';
};

// Check if city is selected
export const validateCity = (city) => {
  if (!city) {
    return 'Please select a city';
  }
  return '';
};

// Check if PAN number is valid
export const validatePanNumber = (panNumber) => {
  if (!panNumber) {
    return 'PAN number is required';
  }
  const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  if (!panPattern.test(panNumber)) {
    return 'PAN number should be in format: ABCDE1234F';
  }
  return '';
};

// Check if Aadhar number is valid
export const validateAadharNumber = (aadharNumber) => {
  if (!aadharNumber) {
    return 'Aadhar number is required';
  }
  if (!/^\d{12}$/.test(aadharNumber)) {
    return 'Aadhar number must be exactly 12 digits';
  }
  return '';
};