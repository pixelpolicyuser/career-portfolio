const accessMap = {
  "123456": "john_doe"
};

function authenticateUser() {
  const code = document.getElementById('accessCode').value;
  if (accessMap[code]) {
    window.location.href = `users/${accessMap[code]}/index.html`;
  } else {
    document.getElementById('error').innerText = "Invalid code. Please try again.";
  }
}