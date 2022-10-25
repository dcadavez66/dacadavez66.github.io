
const mouseMoved = (e) =>{

	var cube = document.getElementById('cube1');
	var cub2 = document.getElementById('cube2');
	var cube3 = document.getElementById('cube3');
	var movX = e.movementX;
	var movY = e.movementY

	var angleX = 0;
	var angleY = 0;

	if(movX < 0){

		angleX +=180;
		cube.style.setProperty("--y", '-' +angleX +'deg');
		cube2.style.setProperty("--y", '-' +angleX +'deg');
		cube3.style.setProperty("--y", '-' +angleX +'deg');
	}
	else{

		// angleX +=90;
		cube.style.setProperty("--y", angleX +'deg');
		cube2.style.setProperty("--y", angleX +'deg');
		cube3.style.setProperty("--y", angleX +'deg');
	}


	if(movY < 0 ){
		angleY +=180;
		cube.style.setProperty("--x", '-' +angleY +'deg');
		cube2.style.setProperty("--x", '-' +angleY +'deg');
		cube3.style.setProperty("--x", '-' +angleY +'deg');
	}
	else{

		// angleY -=90;
		cube.style.setProperty("--x", '-' +angleY +'deg');
		cube2.style.setProperty("--x", '-' +angleY +'deg');
		cube3.style.setProperty("--x", '-' +angleY +'deg');

	}

}



const pageLoaded = () => {





	addEventListener('mousemove', (e) => mouseMoved(e));



}