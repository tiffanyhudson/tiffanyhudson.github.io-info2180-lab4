window.onload= function (){
	let boundary1 = document.getElementById("boundary1");
	boundary1.onmouseover = function() {
		this.setAttribute("class", "boundary youlose");
	}
	let boundary = document.querySelectorAll(".boundary");
	let tracker = 0;
	for (let a = 0; a < boundary.length; a++)
	{
		boundary[a].onmouseover = function(){
			for (let b = 0; b< boundary.length-1;b++){
				boundary[b].setAttribute("class","boundary youlose");
			}
			tracker++;
			document.getElementById("status").innerHTML = "You Lose";
		}
	}
	let e = document.getElementById("end");
	e.onmouseover = function(){
		if (tracker == 0)
		{
			document.getElementById("status").innerHTML = "You Win";
		};
	}
	let s = document.getElementById("start");
	s.onclick = function(){
		tracker=0;
		document.getElementById("status").innerHTML = "Move your mouse over the \"S\" to begin.";
		for (let a = 0; a < boundary.length-1;a++) {
			boundary[a].setAttribute("class","boundary boundary");
		};
		let maze = document.getElementById("maze");
		document.onmousemove = function (event) {
			let x = event.clientX;
			let y = event.clientY;
			let l = maze.offsetLeft;
			let r = maze.offsetRight;
			let h = maze.offsetHeight;
			let w = maze.offsetWidth;
			let t = maze.offsetTop;
			if ((x < l)||(x < r))
			{
				for (let b = 0; b< boundary.length ; b++)
				{
					boundary[b].setAttribute("class","boundary youlose");
				}
			}
		}
	}
}
