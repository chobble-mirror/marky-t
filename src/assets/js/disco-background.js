// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize disco lights effect
  initDiscoLights();
});

/**
 * Initializes and manages the disco lights effect
 */
function initDiscoLights() {
  // Use IIFE to avoid polluting global namespace
  (function () {
    const container = document.querySelector(".disco-container");
    const colors = [
      "rgba(255, 0, 128, 0.3)", // Pink
      "rgba(0, 153, 255, 0.3)", // Blue
      "rgba(255, 204, 0, 0.3)", // Yellow
      "rgba(102, 0, 204, 0.3)", // Purple
      "rgba(0, 204, 102, 0.3)", // Green
    ];
    const lightCount = 10;

    /**
     * Creates a single disco light element
     */
    function createDiscoLight(index) {
      const light = document.createElement("div");
      light.className = "disco-light";

      // Random size between 120px and 450px
      const size = Math.random() * 330 + 120;
      light.style.width = `${size}px`;
      light.style.height = `${size}px`;

      // Random position
      positionLight(light, index);

      // Random color
      const colorIndex = Math.floor(Math.random() * colors.length);
      light.style.backgroundColor = colors[colorIndex];

      container.appendChild(light);
    }

    /**
     * Sets a random position for a light element
     * @param {HTMLElement} light - The light element to position
     */
    function positionLight(light, index) {
      const x = Math.random() * 100;
      let y = Math.random() * 33;
      if (index > 4 && index < 8) y += 33;
      else if (index >= 8) y += 66;

      light.style.left = `${x}%`;
      light.style.top = `${y}%`;
    }

    /**
     * Animates all lights to new random positions
     */
    function animateLights() {
      const lights = document.querySelectorAll(".disco-light");

      lights.forEach((light) => {
        // Generate new random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        // Animate to new position
        light.style.transform = `translate(${x - 50}%, ${y - 50}%)`;
      });

      // Schedule next animation
      setTimeout(animateLights, 2000); // Move lights every 10 seconds
    }

    // Initialize the lights
    for (let i = 0; i < lightCount; i++) {
      createDiscoLight(i);
    }

    // Start the animation loop
    animateLights();
  })(); // Immediately invoke the function
}
