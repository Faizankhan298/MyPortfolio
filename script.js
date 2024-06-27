function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


const title = document.querySelector("#title");

const arr = [
  "Frontend Developer",
  "Backend Developer",
  "UI/UX Designer",
  "MERN Developer",
];

let index = 0;
let textIndex = 0;
let isDeleting = false;
let speed = 50;

function typeWriter() {
  let currentText = arr[index];
  let displayText = isDeleting
    ? currentText.substring(0, textIndex--)
    : currentText.substring(0, textIndex++);

  title.innerHTML = displayText + " |";

  if (!isDeleting && textIndex === currentText.length) {
    setTimeout(() => {
      isDeleting = true;
    }, 1000);
  } else if (isDeleting && textIndex === 0) {
    isDeleting = false;
    index = (index + 1) % arr.length;
  }

  setTimeout(typeWriter, speed);
}

typeWriter();
