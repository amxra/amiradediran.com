
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

