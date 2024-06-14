document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".shuffle-section");

  sections.forEach((section) => {
    const images = JSON.parse(section.getAttribute("data-images"));
    const heading = section.querySelector("h1");
    const originalText = section.getAttribute("data-original-text");
    const hoverText = section.getAttribute("data-hover-text");
    let interval;

    section.addEventListener("mouseenter", () => {
      let currentIndex = 0;
      section.classList.add("hover");
      section.classList.remove("fade-out");
      heading.textContent = hoverText;
      interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        section.style.setProperty(
          "--background-image",
          `url(${images[currentIndex]})`
        );
      }, 300); // Adjust the speed of image shuffling here
    });

    section.addEventListener("mouseleave", () => {
      clearInterval(interval);
      section.classList.remove("hover");
      section.classList.add("fade-out");
      heading.textContent = originalText;
    });
  });
});
