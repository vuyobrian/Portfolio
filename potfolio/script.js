function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


// /Contact section/ 
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const loadingIndicator = document.getElementById("loadingIndicator");
    const messageError = document.getElementById("messageError");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        loadingIndicator.style.display = "block";

        // Simulate form submission (replace with your server-side logic)
        setTimeout(function () {
            loadingIndicator.style.display = "none";
            const success = Math.random() < 0.5; // Simulated success
            if (success) {
                form.reset();
                alert("Message sent successfully!");
            } else {
                messageError.style.display = "block";
                messageError.innerHTML = "Message sending failed. Please try again later.";
            }
        }, 2000); // Simulated delay (2 seconds)
    });
});



// darkMode
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  
  document.body.classList.add('darkmode');
  
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  
  document.body.classList.remove('darkmode');
   
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});
