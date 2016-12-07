var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/foto-gen.jpg') {
		myImage.setAttribute ('src','images/foto-gen2.jpg');
	} else {
		myyImage.setAttribute ('src','images/foto-gen.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Escribe tu nombre.');
	localStorage.setItem('Nombre', myName);
	myHeading.textContent = myName + ' y la Generación 2001-2017';
}

if(!localStorage.getItem('Nombre')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('Nombre');
	myHeading.textContent = storedName + ' y la Generación 2001-2017';
}

myButton.onclick = function() {
	setUserName();
}
