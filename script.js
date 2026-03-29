
document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlides() {
    // Hide all slides by removing the 'active' class
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }

    // Increment slideIndex and reset if it exceeds the number of slides
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    // Add the 'active' class to the current slide to show it
    slides[slideIndex - 1].classList.add("active");

    // Repeat the function every 3 seconds
    setTimeout(showSlides, 3000);
  }

  // Start the slideshow
  showSlides();
});