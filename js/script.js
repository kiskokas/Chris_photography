// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000, // Animation duration
  once: true, // Animate only once
});

function loadPage(page) {
  fetch(page)
      .then(response => response.text())
      .then(data => {
          document.getElementById('content').innerHTML = data;
      })
      .catch(error => console.log("Error loading page:", error));
}

// Smooth scroll for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

let currentImageIndex = 0;
const images = [
  'images/photo1.jpg',
  'images/photo2.jpg',
  'images/photo3.jpg',
  'images/photo4.jpg',
  'images/photo5.jpg'
];

function openLightbox(imageSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  currentImageIndex = images.indexOf(imageSrc);
  lightboxImg.src = imageSrc;
  lightbox.style.display = 'flex';
}

function closeLightbox(event) {
  // Only close the lightbox if the click is on the overlay (not the controls or image)
  if (event.target === document.getElementById('lightbox')) {
      document.getElementById('lightbox').style.display = 'none';
  }
}

function changeImage(direction) {
  // Change the image in the lightbox (prev or next)
  currentImageIndex += direction;

  // If the index goes out of bounds, loop back to the first or last image
  if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
  } else if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
  }

  // Update the lightbox with the new image
  document.getElementById('lightbox-img').src = images[currentImageIndex];
}

// Show or hide the button based on scroll position
window.onscroll = function () {
  let btn = document.getElementById("back-to-top");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
  } else {
      btn.style.display = "none";
  }
};

// Scroll to the top smoothly
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("load", function () {
  let images = document.querySelectorAll(".gallery-item img");
  images.forEach(img => {
      img.style.height = `${img.clientWidth}px`; // Adjust height dynamically
  });
});

// Load the home page by default
window.onload = function () {
  loadPage('home.html');
};

// Add event listeners for gallery images on the new gallery page
document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', (e) => {
      openLightbox(e.target.src);
  });
});