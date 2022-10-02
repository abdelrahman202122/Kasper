const options = {
  rootMargin: "0px",
  threshold: 0.5,
};

const callback = (entries, observer) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry.target);
    entry.target.classList.add("animate-off");
    observer.unobserve(entry.target);
  }
};

const observer = new IntersectionObserver(callback, options);

const targetEl = document.querySelectorAll(".animate");
console.log(targetEl);
targetEl.forEach((el) => {
  observer.observe(el);
});
