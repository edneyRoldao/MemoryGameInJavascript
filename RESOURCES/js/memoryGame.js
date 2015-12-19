window.onload = function() {
	loadImagesToStartGame();
	setTimeout(hideAllImages, 5000);
}

/* This method returns one array with randomic numbers, you can define size and interval of numbers */
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
	var images = document.getElementsByTagName("img");
	var randomList = generateDistinctList(12, 20);
	var randomList2 = randomList;
	var imagesName = buildImgPath(randomList, randomList2);
	for(var i = 0; i < images.length; i++){
		images[i].src = imagesName[i];
		images[i].alt = imagesName[i];
	}

}

function hideAllImages() {
	var images = document.getElementsByTagName("img");
	for(var i = 0; i < images.length; i++){
		images[i].src = "../RESOURCES/img/shadow.png";
	}
}

function hideImage(index) {

	var idPersonSelected = returnIdPersonSelected(index);
	
	var array = document.getElementsByTagName("img");

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
		document.getElementsByTagName("img")[indexAux[0]].src =	document.getElementsByTagName("img")[indexAux[0]].alt;	
		document.getElementsByTagName("img")[indexAux[1]].src =	document.getElementsByTagName("img")[indexAux[1]].alt;	
	}else {
		document.getElementsByTagName("img")[index].src = "../RESOURCES/img/shadow.png";
	}

}


function imgSelectedByClick(index) {
	var imgData = document.getElementsByTagName("img")[index];
	imgData.src = imgData.alt;
	setTimeout(function() {
		hideImage(index);
	}, 4000);

}

function returnIdPersonSelected(index) {
	var idPerson = document.getElementsByTagName("img")[index].src;
	idPerson = idPerson.replace('g/' , '@').replace('_' , '@').replace('.p' , '@');
	var aux = idPerson.split('@');
	idPerson = aux[1];
	return idPerson;
}






















