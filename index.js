
var angleX = 180;

var lastScreenX = 0;
var runOnce = true;

const mouseMoved = (e) =>{

	var cubeArray = document.getElementsByClassName("cube");
	var movX = e.screenX;
	var movY = e.movementY;
	
	if(runOnce){
		lastScreenX = movX;
		runOnce = false;
	}	
	
	var angleY = 0;

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



	// if(movY < 0 ){
	// 	angleY +=180;
	// 	for(let i = 0 ; i < cubeArray.length; i++){

	// 		cubeArray[i].style.setProperty("--x", '-' +angleY +'deg');
	// 	}
		
	// }
	// else{

	// 	// angleY +=180;
	// 	for(let i = 0 ; i < cubeArray.length; i++){

	// 		cubeArray[i].style.setProperty("--x", '-' +angleY +'deg');
	// 	}
	// }

}


const handleNavClick = () =>{


	var scene1 = document.getElementById('scene1');
	var scene3 = document.getElementById('scene3');
	scene1.style.animation="moveSceneLeft 2s linear forwards"
	scene3.style.animation="moveSceneRight 2s linear forwards"

	// scene1.style.transform = "translateX(157px)";
	// scene3.style.transform = "translateX(-157px)";



	var frontFaceArray = document.getElementsByClassName("cube__face--front");
	var backFaceArray = document.getElementsByClassName("cube__face--back");

	for(let i = 0 ; i < frontFaceArray.length; i++ ){

		// frontFaceArray[i].style.animation = "lightFaceUp 6s linear forwards"
		backFaceArray[i].style.animation = "lightFaceUp 1s linear 2s forwards"

		if(i == 0){
			// frontFaceArray[i].innerHTML = 'Hello';
			backFaceArray[i].innerHTML = 'Portuguese creative developer';
			
		}
		else if(i == 1){
			// frontFaceArray[i].innerHTML = 'world';
			backFaceArray[i].innerHTML = 'currently working as';

		}
		else if(i == 2){
			// frontFaceArray[i].innerHTML = 'Adeus';
			backFaceArray[i].innerHTML = 'a full stack engineer';
		}

		

		


	}





}


const pageLoaded = () => {

	addEventListener('mousemove', (e) => mouseMoved(e));

}