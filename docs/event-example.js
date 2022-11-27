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
const nav_h_str = '--nav-h';
const num_unit_re = /\s*(\d+)(\w*)/;
const expanded_nav_h = 80;
const expanded_unit = 'vh';
let expanded = false;
let nav_h = 0;
nav_expand_button.onclick = () => {
  if (expanded) {
    return;
  }
  const cbody = getComputedStyle(document.querySelector('body'));
  nav_h = cbody.getPropertyValue(nav_h_str);
  let num_unit = num_unit_re.exec(nav_h);
  let num = 0;
  let unit = '';
  if (num_unit.length > 2) {
    num = parseInt(num_unit[1]);
    unit = num_unit[2];
  }
  let new_nav_h_str = expanded_nav_h + expanded_unit;
  document.querySelector('body').style.setProperty(nav_h_str, new_nav_h_str);
debugger;
}
const event_divObj = document.querySelector('#event-div');
const event_org_txt = event_divObj.textContent;
const btn_elem = document.querySelector("#btn-elem");
let btn_counter = 0;
          btn_elem.onclick = function() {
            btn_counter += 1;
            event_divObj.textContent = `${event_org_txt} + ${btn_counter}`;
          }
let body = document.querySelector('body');
let cstyle = getComputedStyle(body);
nav_h = cstyle.getPropertyValue('--nav-h');
document.querySelector('#nav-h').textContent = nav_h;