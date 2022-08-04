// Heading !
// h1..
// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'MARKHOR is Cool!';

// Image Change..
// img

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/markhor-icon.png') {
      myImage.setAttribute('src','images/markhor-icon2.png');
    } else {
      myImage.setAttribute('src','images/markhor-icon.png');
    }
}

// Welcome Message..

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'MARKHOR is Cool!, ' + myName;
    }
}
 
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'MARKHOR is Cool!, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }
  
  
