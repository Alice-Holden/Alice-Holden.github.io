$(document).ready(function(){
 	$('.buttonOpenDessertMenu').click(ShowButtonDessert);
  	$('.closedropDownMenuDessert').click(hideButtonDessert);



function ShowButtonDessert(){
  $('.closedropDownMenuDessert').show();
  $('.buttonOpenDessertMenu').hide();
  $('.hideDessert').removeClass('closedDessert').addClass('openDessert');
};
function hideButtonDessert(){
  $('.closedropDownMenuDessert').hide();
  $('.buttonOpenDessertMenu').show();
  $('.hideDessert').removeClass('openDessert').addClass('closedDessert');
};




}); 