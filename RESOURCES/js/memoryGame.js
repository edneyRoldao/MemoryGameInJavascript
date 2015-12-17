window.onload = function() {

	var images = document.getElementsByTagName("img");

	for(var i = 0; i < images.length; i++) {
		var ran = Math.floor(Math.random()*5);
		var imgPath = "../RESOURCES/img/theme";
		var imgCompound = imgPath + ran + ".png";
		//alert(imgCompound);
		//alert(typeof(imgCompound));
		
	}


}