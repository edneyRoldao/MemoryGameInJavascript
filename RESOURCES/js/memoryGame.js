window.onload = function() {

	var images = document.getElementsByTagName("img");

	/*for(var i = 0; i < images.length; i++) {
		var ran = Math.floor(Math.random()*5);
		var imgPath = "../RESOURCES/img/theme";
		var imgCompound = imgPath + ran + ".png";
	}*/

	var list = new Array();
	for(var i = 0; i < 12; i++){
		list[i] = Math.floor(Math.random()*20) + 1;
	}

	var thereIsEqNumber = true;

	while(thereIsEqNumber) {
		var r = Math.floor(Math.random()*20) + 1;
		var exists = false;
		for(var i = 0; i < list.length; i++){
			if(list[i] == r) {
				exists = true;
				break;
			}else {
				list[i] = r;
			}
		}
	}

	alert(list);
	alert(list.length)

}

