$(function(){
	var i =0;
	//参考js向上轮播
	//克隆所有的li一遍
	var clone = $('.hotmes .lunbo ul').children('li').clone(true);
	$('.hotmes .lunbo ul').append(clone);
	//获取li的数量
	var size = $('.hotmes .lunbo ul li').size();
		console.log('size'+size)
	//获取第一个li的高度
	var iHeight = $('.hotmes .lunbo ul li').first().height();
		console.log(iHeight);
	function movetop(){
		i++;
		//因为克隆，所以此次有10个li，当轮到最后一张图片时top为0
		if (i == size/2) {
				$('.hotmes .lunbo ul').css({'top':'0px'});
				i = 0;
		}
		$('.hotmes .lunbo ul').stop().animate({top:-iHeight*i},500);
	}
	
		var timer = setInterval(movetop,3000);
		$('.hotmes .lunbo').hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(movetop,3000);
		})
		

})