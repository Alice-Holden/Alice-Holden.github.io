function ScrollUp(){
    var t,s;
    s=document.body.scrollTop||window.pageYOffset;
    t=setInterval(function(){
    	if(s>0)window.scroll(0,s-=10);
    	else clearInterval(t)
    },6);
}
$(document).ready(function(){
 	$('.read_more_one').click(ShowRead);
  	$('.read_block1_hide').click(hideRead);

}); 
function ShowRead(){
  $('.read_block1').show();
}
function hideRead(){
  $('.read_block1').hide();
}


$(document).ready(function(){
 	$('.read_feat').click(ShowFeat);
  	$('.close_feature').click(hideFeat);

}); 

function ShowFeat(){
  $('.read_feature').show();
}
function hideFeat(){
  $('.read_feature').hide();
}


$(document).ready(function(){
 	$('.arrow').click(ShowAboutUs);
 	$('.arrow').click(hideFeat);
 	$('.arrow_left').click(ShowFeat);
 	$('.arrow_left').click(hideAboutUs);
  	$('.close_about_us').click(hideAboutUs);

}); 

function ShowAboutUs(){
  $('.read_about_us').show();
}
function hideAboutUs(){
  $('.read_about_us').hide();
}


$(document).ready(function(){
 	$('.read_portfolio_open').click(ShowReadP);
  	$('.slider_close').click(hideReadP);

}); 

function setWidthPortfolio(){
    $(photoMas).each(function(){ photoMasWidth += $(this).width();});
  document.getElementById('slider_one').style.width=photoMasWidth+'px';
}
function ShowReadP(){
  $('.read_portfolio').show();
  setWidthPortfolio();
}
function hideReadP(){
  $('.read_portfolio').hide();
}


document.getElementById('button_slaider_right_top').onclick = sliderLeftBottom;
  
  var left=0;
  var shiftCount = 0;
  var photoMas = document.getElementsByClassName('photo_slaider');
  var photoMasWidth = 0.0;
  setWidthPortfolio();

function sliderLeftBottom(){
  var sliderOne = document.getElementById('slider_one');
  var width = photoMas[shiftCount].width;
  left = left-width;
  sliderOne.style.left = left+'px';
  shiftCount++;
  if(shiftCount==photoMas.length-2){
    left=0;
    shiftCount=0;
  }
}


$(document).ready(function(){
 	$('.open_testimonials').click(ShowFeatTestOne);
  	$('.close_testimonials').click(hideFeatTestOne);

}); 

function ShowFeatTestOne(){
  $('.read_block_testimonials').show();
}
function hideFeatTestOne(){
  $('.read_block_testimonials').hide();
}


$(document).ready(function(){
 	$('.open_testimonials_two').click(ShowFeatTestTwo);
  	$('.close_testimonials_two').click(hideFeatTestTwo);

}); 

function ShowFeatTestTwo(){
  $('.read_block_testimonials_two').show();
}
function hideFeatTestTwo(){
  $('.read_block_testimonials_two').hide();
}


$(window).on( 'scroll', function(){
   var topPosition = $(window).scrollTop();
   if(topPosition > 1000){
    $('.navig').addClass('navig_dark');
   }else{
        $('.navig').removeClass('navig_dark');
   }
});
















