$(function(){
	
			
		
//	购物车tab的hover
	$('.car_open .car_tab > li').hover(function(){
		$(this).css('background','#c81623');
		$(this).children('b').stop().show(300).css('background','#c81623');
	},function(){
		$(this).css('background','#7a6e6e');
		$(this).children('b').stop().hide(300).css('background','#7a6e6e');
	})
////	点击购物车弹出购物栏的框即购物信息
	$('.car_open .car_tab .car').toggle(function(){
		//当我点击购物车图标时，将整个contain的right为270px
		$('#shopCar .car_open').stop().animate({'right':'270px'},500);
	},function(){
		$('#shopCar .car_open').stop().animate({'right':'0px'},500);
	})
//购物车的关闭按钮
	$('.car_open .car_content p .close').click(function(){
		$('#shopCar .car_open').stop().animate({'right':'0px'},500);
	})
//回到顶部
	$('.car_open .car_tab').click(function(){
		$('body,html').stop(true).animate({scrollTop:0},500);
	})
//京东会员登录弹窗
		$('.car_open .car_tab .jd_vip').click(function(){
					//点击创建一个class为popover的div
					var popover = $('<div class="popover"></div>')
					$('body').append(popover);
					//获取浏览器正中间的位置:     （浏览器窗口宽度 - div的宽度）/2
					var top= ( $(window).height()- popover.outerHeight() )/2;
					var left= ( $(window).width()- popover.outerWidth() )/2;
					$('.popover').css({left:left,top:top});
					//当调整浏览器窗口的大小时，发生 resize 事件。
					
					//$(window).scrollTop()  窗口
					$(window).on('resize scroll',function(){
						var top= ( $(window).height()- popover.outerHeight() )/2 + $(window).scrollTop();
						var left= ( $(window).width()- popover.outerWidth() )/2 + $(window).scrollLeft();
						$('.popover').css({left:left,top:top});
					})
				})
})