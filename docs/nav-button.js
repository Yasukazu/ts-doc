const cbody = getComputedStyle(document.querySelector('body'));
const nav_h = cbody.getPropertyValue("--nav-h");
const nav_h_2 = cbody.getPropertyValue("--nav-h-2");
const nav_w = cbody.getPropertyValue("--nav-w");
const nav_w_2 = cbody.getPropertyValue("--nav-w-2");
const nav_on_off_button = document.querySelector("#nav-on-off");
const nav_bar = document.querySelector("#nav-bar");
debugger;
const pc_media = "(min-width: 540px)";
const dbody = document.querySelector('body').style;
let navOn = false;
nav_on_off_button.onclick = () => {
  if (nav_bar.style.display == 'block') {
    nav_bar.style.display = 'none';
  } else {
    nav_bar.style.display = 'block';
  }
}