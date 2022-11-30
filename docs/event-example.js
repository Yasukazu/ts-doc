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
const nav_expand_button = document.querySelector("button#nav-expand");
const nav_shrink_button = document.querySelector("button#nav-shrink");
const pc_media = "(min-width: 540px)";
const dbody = document.querySelector('body').style;
let isShrink = false;
nav_expand_button.onclick = () => {
  if (isShrink) {
    const isPC = window.matchMedia(pc_media).matches;
    const dst = "--nav-" + (isPC ? 'w' : 'h');
    const src_val = isPC ? nav_w : nav_h;
    dbody.setProperty(dst, src_val);
    isShrink = false;
  }
}
nav_shrink_button.onclick = () => {
  if (!isShrink) {
    const isPC = window.matchMedia(pc_media).matches;
    const dst = "--nav-" + (isPC ? 'w' : 'h');
    const src_val = isPC ? nav_w_2 : nav_h_2;
    dbody.setProperty(dst, src_val);
    isShrink = true;
  }
}