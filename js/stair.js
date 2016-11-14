$(function(){
	//进入页面判断滚动条所在位置决定是否显示侧边的楼梯
	$(window).scroll(function(){
		if($(window).scrollTop() >= ($('.floor > div').eq(0).offset().top - $('.floor > div').height()/2)){
			$('#stair').slideDown(300);
		}else{
			$('#stair').slideUp(300);
		}
	})
	var myClick = false;  //定义一个状态，用来判断是否处于点击状态下；
	$(window).on('scroll',function(){  //监听页面滚动变化
		var that = $(this);
		
		//当滚动条高度大于等于第一个DIV到文档最顶部的距离加此DIV的高度一半时，侧边楼梯出现；
		if($(window).scrollTop() >= ($('.floor > div').eq(0).offset().top-$('.floor > div').height()/2)){
			$('#stair').slideDown(300,function(){
				//unbind()方法防止重复绑定点击事件
				$('#stair > li').unbind().on('click',function(){
					myClick = true; //每次点击都把myClick这个状态设置为true，这样防止下面代码跟随执行；
					if($(this).index() == $('#stair > li').size()-1){
						//最后一个楼梯特殊考虑。
						$('body,html').stop(true).animate({scrollTop:0},500,function(){
							myClick = false;  //动画执行完毕后将状态改为false；让滚动条事件来改变侧边楼梯的选中状态
						});
					}else{
						$('body,html').stop(true).animate({scrollTop:$('.floor > div').eq($(this).index()).offset().top},500,function(){
							myClick = false;  //动画执行完毕后将状态改为false；让滚动条事件来改变侧边楼梯的选中状态
						});
					}
					//设置当前点击的li的状态，并将其他的复原；
					$(this).find('span').show().parent().siblings().find('span').hide();
				})
			});
		}else{
			//当滚动条高度小于第一个DIV到文档最顶部的距离加此DIV的高度一半时，侧边楼梯消失；
			$('#stair').slideUp(300);
		}
		//用当前的scrollTop循环和每个mian下面的DIV到文档顶部加自身高度的一半进行比较；找到满足条件的DIV，用其index值改变侧边楼里的选中状态；
		$('.floor > div').each(function(i,v){
			if(that.scrollTop() >= ($(this).offset().top - $('.floor > div').height()/2)){
				if(!myClick){
					$('#stair > li').eq($(this).index()).find('span').show().parent().siblings().find('span').hide();
				}
			}
		});
	})
	
	
})