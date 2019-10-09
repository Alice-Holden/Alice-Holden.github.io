

// 	function add(){
// 	 if( window.screen.width > 500){

// console.log("больше"); 
//   $('.mainClass').removeClass('newClass').addClass('circular-menu main-circle');
//   $('.mainClassBlock').removeClass('newClassItem').addClass('circular-menu_item');
//   $('.mainClassButt').removeClass('newClassItemButton').addClass('circular-menu_button');

// } else {
	
//   $('.mainClass').removeClass('circular-menu main-circle').addClass('newClass');
//   $('.mainClassBlock').removeClass('circular-menu_item').addClass('newClassItem');
//   $('.mainClassButt').removeClass('circular-menu_button').addClass('newClassItemButton');

// console.log('меньеш');
// } 
// };








$(document).ready(function(){


var mql = window.matchMedia('all and (min-width: 760px)');
if (mql.matches) {
  console.log("больше");

var dd = console.log;
let menus = [...document.querySelectorAll('.circular-menu')];

menus.map((menu)=> {
	dd(menu);
	let items = menu.querySelectorAll('.circular-menu_item');
	let button = menu.querySelector('.circular-menu_button');
	let mainCircle = document.querySelector('.main-circle');
	dd(button);
	let active = false;

	const length = items.length;
	const arc = 2 * Math.PI * (1 / length);
	const radius = 40;

	button.addEventListener('mouseenter',(e)=> {
		e.preventDefault();


		

			button.classList.add('circular-menu_button_active');

			for(let i = 0; i < length; i++){
				const angle = i * arc;
				const x = radius * Math.cos(angle);
				const y = radius * Math.sin(angle);

				items[i].style.left = 50 + x + '%';
				items[i].style.top = 50 + y + '%';
			}
		
	});

	mainCircle.addEventListener('mouseleave',(e)=> {
		e.preventDefault();


		
			button.classList.remove('circular-menu_button_active');
			for(let i = 0; i < length; i++){
				items[i].removeAttribute('style');
			}
		
	});
});
} else {
  console.log("меньше");

};
});





