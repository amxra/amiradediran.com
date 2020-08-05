
// navi

$('nav').hide(); // Navigation masquée par défaut
$(document).ready(function(){
	$('a.menu_btn').click(function(){ // On affiche la navigation au clic sur la balise a possédant la classe .menu_btn
		$('nav').slideDown();
		$('a.menu_btn').addClass('hide');
		$('a.close_btn').addClass('show');
	});
	$('a.close_btn').click(function(){
		$('nav').slideUp();
		$('a.menu_btn').removeClass('hide');
		$('a.close_btn').removeClass('show');
	});
});

//toogle

function skills() {
	let x = document.getElementById("open-skills");
	let y = document.getElementById("skill-button");
	let z = document.getElementById("button-toggle-icon")
	if (x.style.display === "none") {
	  x.style.display = "block";
	  y.style.backgroundColor = "#e1ad01";
	  y.style.border = "1px solid #e1ad01";
	  
	  z.src = "images/others/minus.png";
	  z.style.animationName = "none"
	} 
	else {
	  x.style.display = "none";
	  y.style.backgroundColor = "#0b6623";
	  y.style.border = "1px solid #0b6623";
	  z.src = "images/others/plus.png" 
	  z.style.animationName = "bounce"
	}
}

// fullpage

(function() {
	"use strict";
	/*[pan and well CSS scrolls]*/
	var pnls = document.querySelectorAll('.fullpage').length,
		scdir, hold = false;

	function _scrollY(obj) {
		var slength, plength, pan, step = 100,
			vh = window.innerHeight / 100,
			vmin = Math.min(window.innerHeight, window.innerWidth) / 100;
		if ((this !== undefined && this.id === 'well') || (obj !== undefined && obj.id === 'well')) {
			pan = this || obj;
			plength = parseInt(pan.offsetHeight / vh);
		}
		if (pan === undefined) {
			return;
		}
		plength = plength || parseInt(pan.offsetHeight / vmin);
		slength = parseInt(pan.style.transform.replace('translateY(', ''));
		if (scdir === 'up' && Math.abs(slength) < (plength - plength / pnls)) {
			slength = slength - step;
		} else if (scdir === 'down' && slength < 0) {
			slength = slength + step;
		} else if (scdir === 'top') {
			slength = 0;
		}
		if (hold === false) {
			hold = true;
			pan.style.transform = 'translateY(' + slength + 'vh)';
			setTimeout(function() {
				hold = false;
			}, 1000);
		}
		console.log(scdir + ':' + slength + ':' + plength + ':' + (plength - plength / pnls));
	}
	/*[swipe detection on touchscreen devices]*/
	function _swipe(obj) {
		var swdir,
			sX,
			sY,
			dX,
			dY,
			threshold = 100,
			/*[min distance traveled to be considered swipe]*/
			slack = 50,
			/*[max distance allowed at the same time in perpendicular direction]*/
			alT = 500,
			/*[max time allowed to travel that distance]*/
			elT, /*[elapsed time]*/
			stT; /*[start time]*/
		obj.addEventListener('touchstart', function(e) {
			var tchs = e.changedTouches[0];
			swdir = 'none';
			sX = tchs.pageX;
			sY = tchs.pageY;
			stT = new Date().getTime();
			//e.preventDefault();
		}, false);

		obj.addEventListener('touchmove', function(e) {
			e.preventDefault(); /*[prevent scrolling when inside DIV]*/
		}, false);

		obj.addEventListener('touchend', function(e) {
			var tchs = e.changedTouches[0];
			dX = tchs.pageX - sX;
			dY = tchs.pageY - sY;
			elT = new Date().getTime() - stT;
			if (elT <= alT) {
				if (Math.abs(dX) >= threshold && Math.abs(dY) <= slack) {
					swdir = (dX < 0) ? 'left' : 'right';
				} else if (Math.abs(dY) >= threshold && Math.abs(dX) <= slack) {
					swdir = (dY < 0) ? 'up' : 'down';
				}
				if (obj.id === 'well') {
					if (swdir === 'up') {
						scdir = swdir;
						_scrollY(obj);
					} else if (swdir === 'down' && obj.style.transform !== 'translateY(0)') {
						scdir = swdir;
						_scrollY(obj);

					}
					e.stopPropagation();
				}
			}
		}, false);
	}
	/*[assignments]*/
	var well = document.getElementById('well');
	well.style.transform = 'translateY(0)';
	well.addEventListener('wheel', function(e) {
		if (e.deltaY < 0) {
			scdir = 'down';
		}
		if (e.deltaY > 0) {
			scdir = 'up';
		}
		e.stopPropagation();
	});
	well.addEventListener('wheel', _scrollY);
	_swipe(well);
	var tops = document.querySelectorAll('.top');
	for (var i = 0; i < tops.length; i++) {
		tops[i].addEventListener('click', function() {
			scdir = 'top';
			_scrollY(well);
		});
	}
})();