window.onload = function() {

	var images = document.getElementsByTagName("img");

	var numberList = generateDistinctList();
	alert(numberList);
}

function generateDistinctList() {
	var list = [];
	while(list.length < 12){
  		var randomNumber = Math.ceil(Math.random()*19) + 1;
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


