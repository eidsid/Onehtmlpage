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
// to top button
const toTopBtn = document.getElementById("to-top-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    toTopBtn.classList.add("show");
  } else {
    toTopBtn.classList.remove("show");
  }
});

toTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// for chart
const barColors = "gray";
const xValues = ["סוג 1", "סוג 2", "סוג 3", "סוג 4", "סוג 5"];
const yValues = [55, 49, 44, 24, 15];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,

    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            reverse: true,
          },
        },
      ],
    },

    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "סטטיסטיקה",
    },
  },
});
