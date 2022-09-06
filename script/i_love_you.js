var noButton;
var getBody;
var bodyHeight;
var bodyWidth;
var buttonHeight;
var buttonWodth;
var spaceH;
var spaceW;
var getContainer;
var clickCount = -1;
var mySFX;

function center_content(){
	getContainer = document.getElementById("container");
	var getBody = document.getElementsByTagName("body")[0];
	
	//Get Height of the body and its width
	bodyHeight = getBody.clientHeight;
	bodyWidth = getBody.clientWidth;
		
	//Get Height of the container and its width
	containerHeight=getContainer.clientHeight;
	containerWidth = getContainer.clientWidth;
		
	//Position the container in the middle of the screen
	getContainer.style.top = ((bodyHeight - containerHeight)/2) + "px";
	getContainer.style.left = ((bodyWidth - containerWidth)/2) + "px";	

}

var genderValue = "";
//Create Method to get Gender
function getGender(){
	var genderHolder="";
	genderHolder= document.querySelectorAll("input[name=gender]:checked")[0].value;
	return genderHolder;
}

function fullScreen(){
	if(document.documentElement.requestFullscreen)
		document.documentElement.requestFullscreen();
	else if(document.documentElement.mozRequestFullScreen)
		document.documentElement.mozRequestFullScreen();
	else if(document.documentElement.webkitRequestFullscreen)
		document.documentElement.webkitRequestFullscreen();
	else if(document.documentElement.msRequestFullscreen)
		document.documentElement.msRequestFullscreen();
}
function showQuestion(){
	playSound();
	fullScreen();
	document.getElementById("gender").style.display = "none";
	document.getElementById("question").style.display = "block";
	center_content();
	genderValue = getGender();
	
	noButton = document.getElementById("no-button");
	yesButton = document.getElementById("yes-button");
	
	buttonHeight=noButton.clientHeight;
	buttonWidth = noButton.clientWidth;
	
	spaceH = bodyHeight - buttonHeight;
	spaceW = bodyWidth - buttonWidth;
	
	noButton.addEventListener("mouseover", moveNoButton);
	noButton.addEventListener("click", moveNoButton);
	
	yesButton.addEventListener("click", showChatHead);
	
}

function moveNoButton(){
	//Set The New Position of the Button
	const xPosition = Math.floor(Math.random() * spaceW);
	const yPosition = Math.floor(Math.random() * spaceH);
	noButton.style.top = (yPosition - getContainer.style.top.split("px")[0])+ "px";
	noButton.style.left = (xPosition - getContainer.style.left.split("px")[0]) +  "px";
	
	//Increment click count
	clickCount= clickCount+1;
	if(clickCount == 5)
		pass;
}

//Create Function that auto show messenger chat heads
function showChatHead(){
	var messLink = "";
	if (genderValue == "Male"){
		messLink = "https://www.google.com/search?q=first+computer+virus+in+philippines&oq=first+computer+virus+in+Phili&aqs=chrome.0.69i59j69i57j0l2.12912j0j9&client=ms-android-lge&sourceid=chrome-mobile&ie=UTF-8";
	}
	else if (genderValue == "Female"){
		messLink = "https://www.google.com/search?q=first+computer+virus+in+philippines&oq=first+computer+virus+in+Phili&aqs=chrome.0.69i59j69i57j0l2.12912j0j9&client=ms-android-lge&sourceid=chrome-mobile&ie=UTF-8";
	}
	else if (genderValue == "Bisexual"){
		messLink = "https://www.google.com/search?q=first+computer+virus+in+philippines&oq=first+computer+virus+in+Phili&aqs=chrome.0.69i59j69i57j0l2.12912j0j9&client=ms-android-lge&sourceid=chrome-mobile&ie=UTF-8";
	}
	else if (genderValue == "Gay"){
		messLink = "https://www.google.com/search?q=first+computer+virus+in+philippines&oq=first+computer+virus+in+Phili&aqs=chrome.0.69i59j69i57j0l2.12912j0j9&client=ms-android-lge&sourceid=chrome-mobile&ie=UTF-8";
	}
	else if (genderValue ==  "Lesbian"){
		messLink = "https://www.google.com/search?q=first+computer+virus+in+philippines&oq=first+computer+virus+in+Phili&aqs=chrome.0.69i59j69i57j0l2.12912j0j9&client=ms-android-lge&sourceid=chrome-mobile&ie=UTF-8";
	}
	else if (genderValue == "Transgender"){
		ytLink = "https://youtu.be/dQw4w9WgXcQ";
		messLink = "https://m.me/zyannayessa";
	}
	pauseSound();
	var newAnchor = document.createElement("a");
	window.open(ytLink);
	newAnchor.href = messLink;
	setTimeout(newAnchor.click, 3000);

	
}

//Create Function for playing the Background sound
function playSound(){
	mySFX = document.getElementById("bgsound");
	mySFX.volume=0.4;
	mySFX.play();
}
//Create Function to pause the background song
function pauseSound(){
	mySFX = document.getElementById("bgsound");
	mySFX.puase();
}


