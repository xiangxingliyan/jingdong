$(function(){
	
//猜你喜欢	
	var j = 0;
		//克隆第一张图片
	var clone = $('.today_right ul li').first().clone(true);
	$('.today_right ul').append(clone);	
	//获取li的长度
	var size = $('.today_right ul li').size();

	$('.today_right .left').click(function(){
		 moveLeft();
	});
	
	
	$('.today_right .right').click(function(){
		 moveRight();
	});
	
	
	function moveLeft(){
		j--;
		if (j == -1) {
			$('.today_right ul').css('left',-(size-1)*1000);
			j=size-2;
		}
		$('.today_right ul').stop().animate({left:-1000*j },1000)
	}
	function moveRight(){
		j++;
		if (j == size) {
				$('.today_right ul').css({'left':'0px'});
				j=1;
		}
		$('.today_right ul').stop().animate({left:-1000*j},1000);
	}
	var timer = setInterval(moveRight,3000);
		$('.today_right ul').hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(moveRight,3000);
		})
})