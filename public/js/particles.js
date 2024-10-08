particlesJS("particles-js", {
  particles: {
    number: { value: 160, density: { enable: true, value_area: 800 } },
    color: { value: "#800080" }, // Set the color to purple
    shape: {
      type: "polygon",  // Set the shape to polygon
      stroke: { width: 0, color: "#800080" }, // Stroke color also purple
      polygon: { nb_sides: 3 },  // Set the number of sides to 3 for a triangle
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: false, speed: 10, opacity_min: 0, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 10, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#800080", // Line color is also purple
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 10,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
