$(document).ready(function(){
 	$('.buttonOpenMenu').click(ShowButton);
  	$('.closedropDownMenus').click(hideButton);



function ShowButton(){
  $('.closedropDownMenus').show();
  $('.hide').removeClass('closed').addClass('open');
};
function hideButton(){
  $('.closedropDownMenus').hide();
  $('.hide').removeClass('open').addClass('closed');
};




}); 