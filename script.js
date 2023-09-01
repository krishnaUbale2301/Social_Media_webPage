// here we are starting our Java Script.
const card = document.getElementById('userCard');
const profilePicture = document.getElementById('profilePicture');
const username = document.getElementById('username');
const fullName = document.getElementById('fullName');
const gender = document.getElementById('gender');
const dob = document.getElementById('dob');
const address = document.getElementById('address');
const email = document.getElementById('email');
const fetchButton = document.getElementById('fetchButton');
const toggleButton = document.getElementById("toggleButton");
const card1 = document.querySelector('.card');
const usernD = document.querySelector('.username')
const fullnameD = document.querySelector('.full-name')
const genderD = document.querySelector('.gender')
const dobD = document.querySelector('.dob')
const addressD = document.querySelector('.address')
const emailD = document.querySelector('.email')


fetchButton.addEventListener('click', fetchRandomUser);

// here we are creating the function for fetch the information from API
function fetchRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            profilePicture.src = user.picture.large;
            username.textContent = user.login.username;
            fullName.textContent = `Name : ${user.name.first} ${user.name.last}`;
            gender.textContent =  `Gender : ${user.gender}`;
            dob.textContent = `Date of Birth: ${new Date(user.dob.date).toLocaleDateString()}`;
            address.textContent = `Address : ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.country}`;
            email.textContent = `Email : ${user.email}`;
        })
        .catch(error => console.error('Error fetching user:', error));
}

card.addEventListener('click', () => {
    card.classList.toggle('expanded');
});

fetchRandomUser();

// here we are adding the toggle feature in our webpage for all elements
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  card1.classList.toggle('card-toggle');
  usernD.classList.toggle('dark-name');
  fullnameD.classList.toggle('dark-name');
  genderD.classList.toggle('dark-name');
  dobD.classList.toggle('dark-name');
  addressD.classList.toggle('dark-name');
  emailD.classList.toggle('dark-name');
});


let isColorChanged = false;

// here we have created the colour changing and text changing feature for toggle button 
toggleButton.addEventListener("click", () => {
  if (isColorChanged) {
    toggleButton.style.backgroundColor = "";
    toggleButton.style.color = "";
    toggleButton.textContent = "Dark Mode";
  } else {
    toggleButton.style.backgroundColor = "#3aafa9";
    toggleButton.style.color = "black";
    toggleButton.textContent = "Light Theme";
  }

  isColorChanged = !isColorChanged;
});






