function startGame() {
	loadImagesToStartGame();
	setTimeout(hideAllImages, 10000);
	setTimeout(startTimer, 10000);
}

/* This method returns one array with randomic numbers, you can 
	define size and interval of numbers */
function generateDistinctList(arrayLength, randomInterval) {
	var list = [];
	while(list.length < arrayLength){
  		var randomNumber = Math.ceil(Math.random() * randomInterval -1) + 1;
  		var found = false;
  		for(var i = 0; i < list.length; i++){
			if(list[i] == randomNumber){
				found = true;
				break;
			}
  		}
		 if(!found)
		 	list[list.length] = randomNumber;
	}
	return list;
}

function buildImgPath(firstList, secondList) {

	var loadImages = [];
	var pathAux = "../RESOURCES/img/";

	//Building images path
	for(var i = 0; i < firstList.length; i++){
		
		var selectImg = Math.ceil(Math.random() * 5) + 1;
		loadImages[i] = pathAux + firstList[i] + "_" + selectImg + ".jpg";

		var selectImg2 = Math.ceil(Math.random() * 5) + 1;
		loadImages[firstList.length + i] = pathAux + secondList[i] + "_" + selectImg2 + ".jpg";
	}

	return loadImages;
}

function loadImagesToStartGame() {
	var images = document.getElementsByName("imgInGame");
	var randomList = generateDistinctList(12, 20);
	var randomList2 = randomList;
	var imagesName = buildImgPath(randomList, randomList2);

	var shuffle = shuffleList(24, 24);
	var imagesNameShuffled = [];
	for(var i = 0; i < shuffle.length; i++){
		imagesNameShuffled[i] = imagesName[shuffle[i]];
	}

	for(var i = 0; i < images.length; i++){
		images[i].src = imagesNameShuffled[i];
		images[i].alt = imagesNameShuffled[i];
	}

}

function hideAllImages() {
	var images = document.getElementsByName("imgInGame");
	for(var i = 0; i < images.length; i++){
		images[i].src = "../RESOURCES/img/shadow.png";
	}
}

function hideImage(index) {

	var idPersonSelected = returnIdPersonSelected(index);
	
	var array = document.getElementsByName("imgInGame");

	var aux = [];
	for(var i = 0; i < array.length; i++){
		aux[i] = returnIdPersonSelected(i);
	}
	var count = 0;
	var indexAux = [];
	for(var i = 0; i < aux.length; i++){
		if(aux[i] == idPersonSelected){
			indexAux = i;
			count++;
		}
	}
	
	if(count == 2) {
		checkEndGame();

		var altAux = document.getElementsByName("imgInGame")[indexAux[0]].alt;
		var altAux2 = document.getElementsByName("imgInGame")[indexAux[1]].alt;
		document.getElementsByName("imgInGame")[indexAux[0]].src =	altAux;	
		document.getElementsByName("imgInGame")[indexAux[1]].src =	altAux2;
	}else {
		document.getElementsByName("imgInGame")[index].src = "../RESOURCES/img/shadow.png";
	}

}


function imgSelectedByClick(index) {
	var imgData = document.getElementsByName("imgInGame")[index];
	imgData.src = imgData.alt;
	setTimeout(function() {
		hideImage(index);
	}, 1500);

}

function returnIdPersonSelected(index) {
	var idPerson = document.getElementsByName("imgInGame")[index].src;
	idPerson = idPerson.replace('g/' , '@').replace('_' , '@').replace('.p' , '@');
	var aux = idPerson.split('@');
	idPerson = aux[1];
	return idPerson;
}


function shuffleList(arrayLength, randomInterval) {
	var list = [];
	while(list.length < arrayLength){
  		var randomNumber = Math.ceil(Math.random() * randomInterval -1) + 1;
  		var found = false;
  		for(var i = 0; i < list.length; i++){
			if(list[i] == randomNumber){
				found = true;
				break;
			}
  		}
		 if(!found)
		 	list[list.length] = randomNumber;
	}

	for(var i = 0; i < list.length; i++){
		if(list[i] == list.length){
			list[i] = 0;
		}
	}

	return list;
}


function startTimer(){
	var minutes = document.getElementById("minutes");
	var seconds = document.getElementById("seconds");
	var timeResulValue = document.getElementById("timerResulValue");
	var totalSeconds = 0;

	setInterval(countTime, 1000);

	function countTime(){
		++totalSeconds;
		var secAux = runTime(totalSeconds%60);
		var minAux = runTime(parseInt(totalSeconds/60));
		seconds.innerHTML = secAux;
		minutes.innerHTML = minAux;
		timeResulValue.value = minAux + ":" + secAux;
	}
}


function runTime(value){
	var stringValue = value + "";
	if(stringValue.length < 2){
		return "0" + stringValue;
	}else {
		return stringValue;
	}
}


function checkEndGame() {
	var isEnd = endGame();
	if(isEnd){
		document.getElementById("timeResult").style.display = "block";
		document.getElementById("timer").style.display = "none";
		var totalTime = document.getElementById("timerResulValue").value;
		document.getElementById("total").innerHTML = totalTime;
	}
}


function endGame() {
	var isGameOver = 0;
	var arrayImg = document.getElementsByName("imgInGame");
	for(var i = 0; i < arrayImg.length; i++){
		var src = arrayImg[i].src;
		if(src.indexOf("shadow") > -1)
			isGameOver++;
	}
	return (isGameOver == 0) ? true : false;
}













