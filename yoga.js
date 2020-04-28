
//Navbar Scroll Color Change

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 30) {
	    $(".mainnavbar").css("background", "white");
	  }

	  else{
		  $(".mainnavbar").css("background", "transparent"); 	
	  }
  });
});


//Navbar Button Click Color Toggle

$(document).ready(function(){
	$("button").click(function(){
		$("nav").toggleClass("menu-list");
		$(".navbar-nav").toggleClass("menu-list");
	});
});

