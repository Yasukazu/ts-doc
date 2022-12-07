

const nav_details = document.querySelector("nav > details");

const nav_anchor = document.querySelectorAll("a.nav-link");
nav_anchor.forEach((a) => a.onclick = close_nav_a_clicked);

function close_nav_a_clicked() {
    nav_details.removeAttribute('open');
}

/*
const col_2 = document.querySelector("div.col-2");
const nav_w = getComputedStyle(document.documentElement).getPropertyValue('--nav-w');
const pc_media_query = window.matchMedia("(min-width: 540px)");

const nav_bar = document.querySelector("#nav-bar");
let is_pc_media = false;
function mediaChangeCheck(pc_media_query) {
  if (pc_media_query.matches) {
    is_pc_media = true;
    nav_bar.style.display = 'block';
  } else {
    is_pc_media = false;
  }
}

if ('addEventListener' in pc_media_query) {
  pc_media_query.addEventListener('change', mediaChangeCheck);
} else {
  console.log("Event listener is not added!");
}

mediaChangeCheck(pc_media_query);
*/