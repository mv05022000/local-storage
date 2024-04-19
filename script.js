const userForm = document.getElementById('userForm');
const userCard = document.getElementById('userCard');

// Check if there's data in localStorage
if (localStorage.getItem('userData')) {
  renderUserCard(JSON.parse(localStorage.getItem('userData')));
}

// Event listener for form submission
userForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const userData = {
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    village: document.getElementById('village').value,
    city: document.getElementById('city').value
  };

  // Store data in localStorage
  localStorage.setItem('userData', JSON.stringify(userData));

  // Render user card
  renderUserCard(userData);
});

// Function to render user card
function renderUserCard(userData) {
  userCard.innerHTML = `
    <h2>User Card</h2>
    <p><strong>Name:</strong> ${userData.name}</p>
    <p><strong>Phone:</strong> ${userData.phone}</p>
    <p><strong>Village:</strong> ${userData.village}</p>
    <p><strong>City:</strong> ${userData.city}</p>
  `;
}
