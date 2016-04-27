$(document).ready(function(){
	//здесь будут сценарии
	$("#name").val("Введите полное имя");
	$("#field-0769e05b7f01ace").val("Включая код");
	$("#field-485361db0f0cbf9").val("Формат DDMMYYYY");
	$("#field-dfc4c6f5dc874d1").val("Чем больше вы тут напишите,тем меньше нам придется вас беспокоить");
	$("input, textarea").focus(function(){
		$(this).select();
	});
	$("figcaption").hide();
	$("figure").each(function(){
		$(this).hover(function(){
			$(this).find("figcaption").slideDown('medium');
		},function(){
			$(this).find("figcaption").slideUp('medium');
			});
	});
});