// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000, // Animation duration
    once: true, // Animate only once
  });
  
  // Smooth scroll for navbar links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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