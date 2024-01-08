import _ from 'lodash';

function createPara(text) {
    const para = document.createElement("p")
    para.innerText = text
    return para
}

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(createPara("Webpack is working!!!"));