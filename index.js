
var angleX = 180;
var angleY = 180;
var lastScreenX = 0;
var lastScreenY = 0;
var runOnce = true;

var lastState = null;

const mouseMoved = (e) =>{

	var cubeArray = document.getElementsByClassName("cube");
	var movX = e.screenX;
	var movY = e.screenY;
	
	if(runOnce){
		lastScreenX = movX;
		lastScreenY = movY;
		runOnce = false;
	}	

	if( (movX < lastScreenX) /*&& ( lastScreenX - movX > 100)*/ ){

		// angleX = 189;

		for(let i = 0 ; i < cubeArray.length; i++){

			cubeArray[i].style.setProperty("--y", '-' +angleX +'deg');
		}
		
		lastScreenX = movX;
		
	}
	else if( (movX > lastScreenX) /*&& ( movX-lastScreenX > 100)*/){

		// angleX = 90;
		for(let i = 0 ; i < cubeArray.length; i++){

			cubeArray[i].style.setProperty("--y", angleX +'deg');
		}
		
		lastScreenX = movX;
	}
	else{

	}



}


const handleNavClick = (e) =>{


	console.log(e);

	var id = e.id;

	var scene1 = document.getElementById('scene1');
	var scene3 = document.getElementById('scene3');

	var galleryContainer = document.getElementById('galleryContainer');

	// var frontFaceArray = document.getElementsByClassName("cube__face--front");
	var backFaceArray = document.getElementsByClassName("cube__face--back");

	var botFaceArray = document.getElementsByClassName("cube__face--bottom");

	if(id == 'About'){

		if(lastState == 'Gallery'){

			galleryContainer.style.opacity = 0;
			for(let i = 0 ; i < botFaceArray.length ; i++){
					
				var delay = i;
				botFaceArray[i].style.animation = "turnLightOff 2s ease-out forwards";

			}

			scene1.style.animation="moveSceneLeft 2s linear 2s forwards";
			scene3.style.animation="moveSceneRight 2s linear 2s forwards";

			for(let i = 0 ; i < backFaceArray.length; i++ ){
				backFaceArray[i].style.animation = "lightFaceUp 4s linear 4s forwards"
				var url = "url('img/About" + (i+1) + ".jpg')";
				backFaceArray[i].style.setProperty('--about-img', url);
			}


		}
		else{
			scene1.style.animation="moveSceneLeft 2s linear forwards";
			scene3.style.animation="moveSceneRight 2s linear forwards";

			for(let i = 0 ; i < backFaceArray.length; i++ ){
				backFaceArray[i].style.animation = "lightFaceUp 4s linear 2s forwards"
				var url = "url('img/About" + (i+1) + ".jpg')";
				backFaceArray[i].style.setProperty('--about-img', url);
			}
		}
		

	}
	else if(id == 'Projects'){

	}
	else if(id == 'Gallery'){

		var delayMin = 0;
		galleryContainer.style.opacity = 1;
		if(lastState == 'About'){
			scene1.style.animation="galleryMoveLeft 4s linear forwards";
			scene3.style.animation="galleryMoveRight 4s linear forwards";	

			for(let i = 0 ; i < backFaceArray.length; i++ ){
			
				backFaceArray[i].style.animation = "lightFaceDown 3s ease-out forwards"
			}

			delayMin = 4;
		}
		

		

		for(let i = 0 ; i < botFaceArray.length ; i++){

				
			var delay = delayMin + i;
			botFaceArray[i].style.animation = "turnLightOn 1s ease-in " +delay +"s forwards";

		}

	}

	lastState = id;
	





}


const pageLoaded = () => {

	addEventListener('mousemove', (e) => mouseMoved(e));

}