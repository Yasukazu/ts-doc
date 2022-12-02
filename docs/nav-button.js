const nav_on_off_button = document.querySelector("#nav-on-off");
const nav_bar = document.querySelector("#nav-bar");

nav_on_off_button.onclick = () => {
  if (nav_bar.style.display == 'block') {
    nav_bar.style.display = 'none';
  } else {
    nav_bar.style.display = 'block';
  }
}

const pc_media_query = window.matchMedia("(min-width: 540px)");

function mediaChangeCheck(media_query) {
  if (media_query.matches) {
    nav_bar.style.display = 'block';
    console.log("nav_bar display: block");
  }
}

if ('addEventListener' in pc_media_query) {
  debugger;
  pc_media_query.addEventListener('change', mediaChangeCheck);
} else {
  console.log("Event listener is not added!");
}

mediaChangeCheck(pc_media_query);