(() => {
  document.onreadystatechange = function () {
    console.log(document.readyState);
    if (document.readyState === "complete") {
      initDiscoLights();
    }
  };

  function initDiscoLights() {
    const container = document.querySelector(".disco-container");
    const colors = [
      "rgba(255, 0, 128, 0.3)", // Pink
      "rgba(0, 153, 255, 0.3)", // Blue
      "rgba(102, 0, 204, 0.3)", // Purple
    ];

    let lightCount = 20;
    if (document.scrollWidth > 1200) lightCount = 40;
    else if (document.scrollWidth > 789) lightCount = 30;

    let lastAnimationTime = 0;
    const animationInterval = 3000;
    let animationFrameId;

    function createDiscoLight(index) {
      const light = document.createElement("div");
      light.className = "disco-light";

      const size = Math.random() * 330 + 40;
      light.style.width = `${size}px`;
      light.style.height = `${size}px`;

      positionLight(light, index);

      const colorIndex = Math.floor(Math.random() * colors.length);
      light.style.backgroundColor = colors[colorIndex];

      container.appendChild(light);
    }

    function positionLight(light, index) {
      const xSection = index % 3;
      const ySection = Math.floor((index % 9) / 3); // This creates groups of 3 vertically

      let x = Math.random() * 33 + xSection * 33;
      let y = Math.random() * 33 + ySection * 33;

      light.style.left = `${x}%`;
      light.style.top = `${y}%`;
    }

    function animationLoop(timestamp) {
      let firstStep = !lastAnimationTime;
      if (firstStep) lastAnimationTime = timestamp;

      const elapsed = timestamp - lastAnimationTime;

      if (elapsed >= animationInterval || firstStep) {
        const lights = document.querySelectorAll(".disco-light");

        lights.forEach((light) => {
          const opacity = Math.random() * 1;
          light.style.opacity = opacity;

          const size = Math.random() * 330 + 40;
          light.style.width = `${size}px`;
          light.style.height = `${size}px`;

          const x = Math.random() * 100;
          const y = Math.random() * 100;
          light.style.transform = `translate(${x - 50}%, ${y - 50}%)`;
        });

        lastAnimationTime = timestamp;
      }

      animationFrameId = requestAnimationFrame(animationLoop);
    }

    for (let i = 0; i < lightCount; i++) {
      createDiscoLight(i);
    }

    animationFrameId = requestAnimationFrame(animationLoop);
  }
})();
