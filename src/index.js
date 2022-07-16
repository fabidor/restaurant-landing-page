import homePage from './home.js'
import menu from './menu.js'
import contact from './contact.js';
import './styles.css'

const content=document.querySelector("#content");
const buttonMenu = document.querySelector("#buttonMenu");
const titleDiv=document.querySelector("#title");

function title(){
    const dinerTitle=document.createElement('p');
    dinerTitle.id="siteTitle";
    dinerTitle.textContent="Dex's Diner";
    return dinerTitle;
}
titleDiv.appendChild(title());

function buttons (){
    const buttonList = document.createElement('div');
    buttonList.className="buttonList";
    const homeBtn = document.createElement('button');
    homeBtn.textContent="Home";
    homeBtn.addEventListener('click', () => component(homePage()));
    buttonList.appendChild(homeBtn);
    const menuBtn = document.createElement('button');
    menuBtn.textContent="Menu";
    menuBtn.addEventListener('click', () => component(menu()));
    buttonList.appendChild(menuBtn);
    const contactBtn = document.createElement('button');
    contactBtn.textContent="Contact";
    contactBtn.addEventListener('click', () => component(contact()));
    buttonList.appendChild(contactBtn);
    
    return buttonList;
}
buttonMenu.appendChild(buttons());

function component(func){
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    const element= func;
    content.appendChild(element);
}



