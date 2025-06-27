
(function() {
  if (window.__fadeInObserverInitialized) return;
  window.__fadeInObserverInitialized = true;

  const observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".fade-in, .fade-in-section").forEach((el) => observer.observe(el));
})();
