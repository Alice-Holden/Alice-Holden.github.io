
window.onload=function(){
	setInterval(function(){
		var scroll = $(window).scrollTop();
		if (scroll == 0) {
			$(".borderPortfolio").css({"border-color": '#333333'}, 400); //изначально фон белый
		};
		if (scroll >= 0.2) {
			$(".borderPortfolio").css({"border-color": '#b6b6b6'}, 400); //затем если проскроллили от 1 до 500 пикселей, то цвет меняется на зелёный
		};
		
	

	});
}