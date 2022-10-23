function greeting(){
  let userName = 'Oscar';

  function displayUserName(){
    return `Hello ${userName}`;
  }
  return displayUserName;
}