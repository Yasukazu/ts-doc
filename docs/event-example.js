let viewportWidth = window.innerWidth;
const win_nav_docObj = document.querySelector('#viewport-width');
win_nav_docObj.textContent = `${viewportWidth}`;
const userAgent = window.navigator.userAgent;
const userAgent_docObj = document.querySelector('#user-agent');
userAgent_docObj.textContent = `${userAgent}`;
const userLanguage = window.navigator.language;
const userLanguage_docObj = document.querySelector('#user-language');
userLanguage_docObj.textContent = `${userLanguage}`;

const cbody = getComputedStyle(document.querySelector('body'));
const nav_h = cbody.getPropertyValue("--nav-h");
const nav_h_2 = cbody.getPropertyValue("--nav-h-2");
const nav_w = cbody.getPropertyValue("--nav-w");
const nav_w_2 = cbody.getPropertyValue("--nav-w-2");
const nav_on_off_button = document.querySelector("#nav-on-off");
const nav_bar = document.querySelector("#nav-bar");
debugger;
/* nav_bar.style.display = "none"; */
const pc_media = "(min-width: 540px)";
const dbody = document.querySelector('body').style;
let navOn = false;
nav_on_off_button.onclick = () => {
  if (nav_bar.style.display == 'block') {
    nav_bar.style.display = 'none';
  } else {
    nav_bar.style.display = 'block';
  }
  /*
  if (!shrinking) {
    const isPC = window.matchMedia(pc_media).matches;
    const dst = "--nav-" + (isPC ? 'w' : 'h');
    const src_val = isPC ? nav_w_2 : nav_h_2;
    dbody.setProperty(dst, src_val);
    shrinking = true;
  } */
}