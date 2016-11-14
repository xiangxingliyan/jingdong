$(function(){
	$('.category_list > li').hover(function(){
		$(this).find('.electric').show();
		$(this).css({'background':'#fff'});
		$(this).find('h3').children('a').css('color','#CC0000')
	},function(){
		$(this).find('.electric').hide();
		$(this).css({'background':'#c81623'});
		$(this).find('h3').children('a').css('color','#fff')
	})
})