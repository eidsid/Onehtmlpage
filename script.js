// Define variables
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu ");

// Toggle menu when menu icon is clicked
menuIcon.addEventListener("click", () => {
  console.log("close");
  menu.classList.toggle("close");
});

// Close menu when a link is clicked
menu.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    menu.classList.toggle("close");
  }
});

// Smooth scrolling for internal links
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const topOffset = 80;
    const targetPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - topOffset;
    window.scrollTo({ top: targetPosition, behavior: "smooth" });
  });
});

// Lazy loading for images
const lazyImages = document.querySelectorAll("img[data-src]");
const lazyObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const lazyImage = entry.target;
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.removeAttribute("data-src");
      lazyObserver.unobserve(lazyImage);
    }
  });
});
lazyImages.forEach((lazyImage) => {
  lazyObserver.observe(lazyImage);
});
