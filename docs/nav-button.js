const nav_on_off_button = document.querySelector("#nav-on-off");
const nav_bar = document.querySelector("#nav-bar");
let is_pc_media = false;


const col_2 = document.querySelector("div.col-2");
const nav_w = getComputedStyle(document.documentElement).getPropertyValue('--nav-w');
debugger;

index_is_on = true;

function turn_nav_on() {

}

nav_on_off_button.onclick = () => {
  if (nav_bar.style.display == 'block') {
    nav_bar.style.display = 'none';
  } else {
    nav_bar.style.display = 'block';
  }
}

const pc_media_query = window.matchMedia("(min-width: 540px)");

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