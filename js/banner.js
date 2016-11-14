$(function(){
	var i = 0
	var timer = setInterval(nextImg,3000);
//	console.log($(".imglist img").length);
	//下一张图片函数
	 function nextImg(){
	 	i++;
	 	i = (i==6)?0:i;
	 	$('.imglist img').eq(i).fadeIn(1000).parent('a').siblings().children('img').hide();
	 	$(".imglist .banner_num li").eq(i).addClass("active").siblings("li").removeClass("active");
	 }
	 //圆点
	 $(".imglist .banner_num li").hover(function(){
				clearInterval(timer);
				i=$(this).index();
				$('.imglist img').eq(i).fadeIn(1000).parent('a').siblings().children('img').hide();
				$(".imglist .banner_num li").eq(i).addClass("active").siblings("li").removeClass("active");
			})
	 
	 //左按钮
	$('.leftBtn').click(function(){
		i = (i==0)?6:i;
		i -=2;
		nextImg();
	})
	//右按钮
	$('.imglist .rightBtn').click(function(){
		nextImg();
	})
	//鼠标划入
	$('.imglist').hover(function(){
			clearInterval(timer);
			$('.imglist .btn').show();
		},function(){
			$('.imglist .btn').hide();
			timer = setInterval(nextImg,2000);
		})
})