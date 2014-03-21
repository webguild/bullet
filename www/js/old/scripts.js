jQuery(document).ready(function($){

/*
	попап форма входа
*/
$(".inner header .navi-bar .nav li + li a, .block-form .nav li + li a").click(function() {
	$(".poup-form.login").show();
	$(".overlay").show();
	return false;
});


$('.nav-link-login').click(function() {
	$(".poup-form.login").show();
	$(".poup-form.register").hide();
	$(".poup-form.pass").hide();
});

/*
	попап форма регистрации
*/
$('.poup-form a.nav-link').click(function() {
	$(".poup-form.login").hide();
	$(".poup-form.register").show();
});

/*
	попап форма забыл пароль
*/
$('.poup-form a.lost-pass').click(function() {
	$(".poup-form.login").hide();
	$(".poup-form.pass").show();
});

/*
	ивент закрытия попап форм	
*/
$(".overlay, .poup-info-block .title .closed, .poup-status .title .closed").click(function() {
	$(".overlay").hide();
	$(".poup-form").hide();
	$('.poup-info-block.poup').hide();
	$('.poup-status').hide();
});

/*
	попап информация о перелете
*/
$("#left .block .links-bar a.read-more").click(function() {
	$(".poup-info-block").show();
	$(".overlay").show();
});


/*
	input checkbox бинд при клике
	страница 3_2_Buy_Passengers_Login.html
*/
$('.order .info-box.no-border ul li').bind('click',function(){
	var input = $(this).find('input');  
	if(input.prop('checked')){
		input.prop('checked',false);
		$(this).removeClass('checked');
	}else{
		input.prop('checked',true);
		$(this).addClass('checked');
	}
});

/*
	добавляем first класс ко всем первым td 
	на стр 5_Compare_Line.html
*/
$("table.result").find("td:first-child").addClass('first');


/*
	стилизируем таблицу при hover
*/
$(".help.tabs table.result tr").hover(
	function () {
		$(this).addClass('hover');
		$(this).prev().addClass('parent')
		$(this).find("td:last-child").addClass('last-hover');
		$(this).find("th:last-child").addClass('last-hover');
	},
	function () {
		$(this).removeClass('hover');
		$(this).prev().removeClass('parent')
		$(this).find("td:last-child").removeClass('last-hover');
		$(this).find("th:last-child").removeClass('last-hover');
});



});