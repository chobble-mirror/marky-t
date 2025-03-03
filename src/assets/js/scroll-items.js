// Self-executing async function that can be loaded asynchronously
(function () {
  // Function to initialize the animation observer
  function initScrollAnimation() {
    const elementsToAnimate = document.querySelectorAll("main img, main hr");
    if (!elementsToAnimate.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the element is in the viewport
          if (entry.isIntersecting) {
            // Add the "viewed" class
            entry.target.classList.add("viewed");

            // Optional: Stop observing the element after it's been viewed once
            // observer.unobserve(entry.target);
          }
        });
      },
      {
        // Options for the observer
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Adds a margin to the bottom of the viewport
      },
    );

    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScrollAnimation);
  } else {
    initScrollAnimation();
  }
})();
