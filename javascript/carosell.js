const landing = document.getElementsByClassName("landing");
const bullets = document.getElementsByClassName("bullets");
const content = landing[0].getElementsByClassName("text");
const overlays = document.getElementsByClassName("overlay");
const prevArrow = document.getElementsByClassName("fa-angle-left")[0];
const nextArrow = document.getElementsByClassName("fa-angle-right")[0];

let currentIndex = 0;

const sections = [];

prevArrow.addEventListener("click", () => {
  currentIndex--;
  currentIndex = currentIndex < 0 ? sections.length - 1 : currentIndex;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (currentIndex === i) {
      activeSection(section);
    } else {
      deactivateSection(section);
    }
  }
});

nextArrow.addEventListener("click", () => {
  currentIndex++;
  currentIndex = currentIndex > sections.length - 1 ? 0 : currentIndex;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (currentIndex === i) {
      activeSection(section);
    } else {
      deactivateSection(section);
    }
  }
});

for (let i = 0; i < overlays.length; i++) {
  sections.push({
    overlay: overlays[i],
    bullet: bullets[0].children[i],
    content: content[i],
  });
}

for (const bullet of bullets[0].children) {
  bullet.addEventListener("click", () => {
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      if (section.bullet === bullet) {
        activeSection(section);
        currentIndex = i;
      } else {
        deactivateSection(section);
      }
    }
  });
}

function activeSection(section) {
  section.overlay.classList.add("active");
  section.bullet.classList.add("active");
  section.content.classList.add("active");
}

function deactivateSection(section) {
  section.overlay.classList.remove("active");
  section.bullet.classList.remove("active");
  section.content.classList.remove("active");
}
