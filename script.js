// script.js
document.addEventListener("DOMContentLoaded", function () {
  const indicator = document
    .getElementById("scroll-indicator")
    .querySelector("div");

  window.addEventListener("scroll", function () {
    const scrollPercentage =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
      100;
    indicator.style.top = scrollPercentage + "%";
  });
});
