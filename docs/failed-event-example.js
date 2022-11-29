let viewportWidth = window.innerWidth;
const win_nav_docObj = document.querySelector('#viewport-width');
win_nav_docObj.textContent = `${viewportWidth}`;
const userAgent = window.navigator.userAgent;
const userAgent_docObj = document.querySelector('#user-agent');
userAgent_docObj.textContent = `${userAgent}`;
const userLanguage = window.navigator.language;
const userLanguage_docObj = document.querySelector('#user-language');
userLanguage_docObj.textContent = `${userLanguage}`;
const nav_expand_button = document.querySelector("button#nav-expand");
const body_style = getComputedStyle(document.querySelector('body'));
const nav_h_str = '--nav-h';
const org_nav_h = body_style.getPropertyValue(nav_h_str);
let nav_h = org_nav_h;
const nav_h2_str = '--nav-h-2';
const org_nav_h2 = body_style.getPropertyValue(nav_h2_str);
let expanded = false;
const pc_media = "(min-width: 540px)";
const event_divObj = document.querySelector('#event-div');
const event_org_txt = event_divObj.textContent;
const btn_elem = document.querySelector("#btn-elem");
let btn_counter = 0;
nav_expand_button.onclick = () => {
  const mqList = window.matchMedia(pc_media);
  if (mqList.matches) {
    return;
  }
  if (expanded) {
    body_style.setProperty(org_nav_h, org_nav_h); /* new_nav_h_str); */
    expanded = false;
    return;
  }
  body_style.setProperty(org_nav_h, org_nav_h2);
  expanded = true;
}
/*
btn_elem.onclick = () => {
  btn_counter += 1;
  event_divObj.textContent = `${event_org_txt} + ${btn_counter}`;
};
*/