
const mouseMoved = (e) =>{

	var cubeArray = document.getElementsByClassName("cube");
	var movX = e.movementX;
	var movY = e.movementY

	var angleX = 0;
	var angleY = 0;

	

	if(movX < 0){

		angleX +=180;
		for(let i = 0 ; i < cubeArray.length; i++){

			cubeArray[i].style.setProperty("--y", '-' +angleX +'deg');
		}
		
		
	}
	else{

		angleX +=180;
		for(let i = 0 ; i < cubeArray.length; i++){

			cubeArray[i].style.setProperty("--y", angleX +'deg');
		}
	}


	if(movY < 0 ){
		angleY +=180;
		for(let i = 0 ; i < cubeArray.length; i++){

			cubeArray[i].style.setProperty("--x", '-' +angleY +'deg');
		}
		
	}
	else{

		// angleY +=180;
		for(let i = 0 ; i < cubeArray.length; i++){

			cubeArray[i].style.setProperty("--x", '-' +angleY +'deg');
		}
	}

}



const pageLoaded = () => {





	addEventListener('mousemove', (e) => mouseMoved(e));



}