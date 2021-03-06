const isEmail = (email) => {
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    return re.test(String(email).toLowerCase());
  };
  
  const isEmpty = (string) => {
    if (string.trim() === '') return true;
    else return false;
  };
  
  // validates investor sign up data 
  exports.validateSignupData = (data) => {
    let errors = {};
  
    if (isEmpty(data.email)) {
      errors.email = 'Must not be empty';
    } else if (!isEmail(data.email)) {
      errors.email = 'Must be a valid email address';
    }
  
    if (isEmpty(data.password)) errors.password = 'Must not be empty';
    if (data.password !== data.confirmPassword)
      errors.confirmPassword = 'Passwords must match';
    if (isEmpty(data.handle)) errors.handle = 'Must not be empty';
  
    return {
      errors,
      valid: Object.keys(errors).length === 0 ? true : false
    };
  };
  
  exports.validateLoginData = (data) => {
    let errors = {};
  
    if (isEmpty(data.email)) errors.email = 'Must not be empty';
    if (isEmpty(data.password)) errors.password = 'Must not be empty';
  
    return {
      errors,
      valid: Object.keys(errors).length === 0 ? true : false
    };
  };
  
  exports.reduceUserDetails = (data) => {
    let userDetails = {};
  
    if (!isEmpty(data.bio.trim())) userDetails.bio = data.bio;
    if (!isEmpty(data.website.trim())) {
      // https://website.com
      if (data.website.trim().substring(0, 4) !== 'http') {
        userDetails.website = `http://${data.website.trim()}`;
      } else userDetails.website = data.website;
    }
    if (!isEmpty(data.location.trim())) userDetails.location = data.location;
  
    return userDetails;
  };