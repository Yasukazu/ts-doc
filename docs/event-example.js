let viewportWidth = window.innerWidth;
const win_nav_docObj = document.querySelector('#viewport-width');
win_nav_docObj.textContent = `${viewportWidth}`;
/* const userAgent = window.navigator.userAgent; */
const isMobileAgent = window.navigator.userAgentData.mobile;
const userAgent_docObj = document.querySelector('#user-agent');
userAgent_docObj.textContent = (isMobileAgent ? 'Mobile' : 'PC') + ' agent'; /*`${userAgent}`;*/
const userLanguage = window.navigator.language;
const userLanguage_docObj = document.querySelector('#user-language');
userLanguage_docObj.textContent = userLanguage;
const hdr_h = getComputedStyle(document.documentElement).getPropertyValue('--hdr-h');
const hdr_h_docObj = document.querySelector('#nav-h');
hdr_h_docObj.textContent = hdr_h;
const btn_elem = document.querySelector("#btn-elem");
const event_divObj = document.querySelector("#event-div");
const event_org_txt = event_divObj.textContent;
let btn_counter = 0;
btn_elem.onclick = function() {
    btn_counter += 1;
    event_divObj.textContent = `${event_org_txt} + ${btn_counter}`;
}