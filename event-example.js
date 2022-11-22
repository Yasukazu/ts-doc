let viewportWidth = window.innerWidth;
const win_nav_docObj = document.querySelector('#viewport-width');
win_nav_docObj.textContent = `${viewportWidth}`;
const userAgent = window.navigator.userAgent;
const userAgent_docObj = document.querySelector('#user-agent');
userAgent_docObj.textContent = `${userAgent}`;
const userLanguage = window.navigator.language;
const userLanguage_docObj = document.querySelector('#user-language');
userLanguage_docObj.textContent = `${userLanguage}`;
const event_divObj = document.querySelector('#event-div');
const event_org_txt = event_divObj.textContent;
const btn_elem = document.querySelector("#btn-elem");
let btn_counter = 0;
          btn_elem.onclick = function() {
            btn_counter += 1;
            event_divObj.textContent = `${event_org_txt} + ${btn_counter}`;
          }