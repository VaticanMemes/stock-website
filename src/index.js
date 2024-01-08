import _ from 'lodash';
import './style.css';
import Icon from './funny_pic.jpg';
import printMe from './print.js';

function createPara(text) {
    const para = document.createElement("p")
    para.innerText = text
    para.classList.add('hello');
    return para
}

function component() {
   const element = document.createElement('div');
   const btn = document.createElement('button');
 
   // Lodash, now imported by this script
   element.appendChild(createPara("Webpack is working!!!"))
 
   // Add the image to our existing div.
   const myIcon = new Image();
   myIcon.src = Icon;

   btn.innerHTML = '<b>See more rule 34 like this</b>';
   btn.onclick = printMe;

   element.appendChild(myIcon);

   element.appendChild(createPara(""));
 
   element.appendChild(btn);
 
   return element;
  }
 
  document.body.appendChild(component());