$(function(){
	
	
//1楼
	$('.floor #cloths .tab li').hover(function(){
		//li的颜色hover时变色
		$(this).addClass('list').siblings().removeClass('list');
		$(this).children('span').hide();
		//获取li的index值，当hover时  ，改变对应.main显示和隐藏
		var index =  $(this).index();	
		$('.floor #cloths .mc .main').eq(index).show().siblings('.main').hide();
	},function(){
		$(this).children('span').show();
	})
	//1楼右侧的图片通过json获得，又因为后面几个导航栏内的内容一致，所以可以同时倒入
			/*
			 * 1、先写好样式，与css样式息息相关
			 * 2、其中每个导航栏内的图片div、文字的div、价格的div必须一致。
			 * 例如：			<!--奢品礼品-->
							<div class="main main_hide num7">
								<ul class="cloth_list"></ul>
								<ul class="cloth_bottom"></ul>
							</div>
							<!--奢华腕表-->
							<div class="main main_hide num8">
								<ul class="cloth_list"></ul>
								<ul class="cloth_bottom"></ul>
							</div>
				
			 * 3、每个ul下方的li的classname最好为 fore1-fore8等类似一致的名字方便创建
			 * 			例如：var mLi = $('<li class="fore'+(y+1)+'"></li>');
			 * 4、给每个main添加一个num1 - num8的样式，使其循环导入
			 * 5、注意append的ul的类名和id名，不能混淆，可以先li  append到body试下
			 * 6、插入样式时复制html代码，一步一步来
			 */
	$.ajax({
		url:'js/floor1.json',
		type:'get',
		success:function(res){
	//循环遍历json的res.length即json中返回值的长度，与json的id相似
			for (var x = 0;x < res.length; x++ ) {//用于控制循环8个导航栏 
				var mainIndex = (x+1);//用于保存main的下标，控制num1-num8
	//遍历每个id下的内容  当y=0的时候，就遍历res[0]的内容，直到res[0]的长度停止第一次循环 ，x++ 直到遍历到最后一个导航栏	
			//获取topContent的数据
				for (var y = 0 ;y < res[x].topContent.length; y++) {
					//获取图片地址src
					var src = res[x].topContent[y].src;
						//console.log('src:'+src);
					//获取文字
					var name = res[x].topContent[y].desc;
						//console.log('desc:'+name);
					//获取价格  x=0 时获取id=0即第一个的topcontent内的数据
					var price = res[x].topContent[y].price;
						//console.log('price:'+price);
					//创建  类名为fore1-fore(y+1)的li
					var mLi = $('<li class="fore'+(y+1)+'"></li>');
					//创建li中的三个div： 图片div，文字div、价格div 
					
					var cloth_img = $('<div class="cloth_img"><a href="#"><img src="img/image/1F服饰/1F服装鞋包/'+src+'"/></a></div>');
					var cloth_name = $('<div class="cloth_name"><a href="#">'+name+'</a></div>');
					var cloth_price = $('<div class="cloth_price"><span>'+price+'</span></div>');
					mLi.append(cloth_img);
					mLi.append(cloth_name);	
					mLi.append(cloth_price);
					//把li追加到ul中
					// .num'+mainIndex+' ：html中给每个main添加一个num1-8的类名 ，可以插入到对应的main中
					$('.floor #cloths .num'+mainIndex+' .cloth_list').append(mLi);
				}
			//获取bottomContent的数据：即main的下面一排的图片
				for (var k = 0; k < res[x].bottomContent.length;k++) {
						//console.log(res[x].bottomContent.length);
					var bottomsrc = res[x].bottomContent[k];
						//console.log('bottomsrc'+bottomsrc);
					var mLi = $('<li class="fore'+(k+1)+'"><a href="#"><img src="img/image/1F服饰/1F服装鞋包/'+bottomsrc+'"/></a></li>')
					$('.floor #cloths .num'+mainIndex+' .cloth_bottom').append(mLi);
				}
			}
		},
		error:function(res){
			alert("error");
		}
	})
//	2楼图片通过json获得
	$.ajax({
		type:"get",
		url:"js/floor2.json",
		async:true,
		success:function(res){
			for (var x = 0 ; x < res.length;x++) {
				var mainIndex = (x+1);
				for (var y = 0;y < res[x].list.length; y++) {
					var src = res[x].list[y].src;
//						console.log('src:'+src);
					var name = res[x].list[y].desc;
//						console.log('desc:'+name);
					var price = res[x].list[y].price;
//						console.log('price:'+price);
					var mLi = $('<li class="fore'+(y+1)+'"></li>');
					//因为json只写了1.jpg。所有用src替换1.jpg
					
					//遍历所有的图片:<img src="img/image/2F个护美妆/'+src+'"/> 
//						json要加上子文件夹的名字: 国际大牌/1.jpg,个人护理/.jpg
					var cloth_img = $('<div class="cloth_img"><a href="#"><img src="img/image/2F个护美妆/'+src+'"/></a></div>')
					var cloth_name = $('<div class="cloth_name"><a href="#">'+name+'</a></div>');
					var cloth_price = $('<div class="cloth_price">'+price+'</div>')
					mLi.append(cloth_img);
					mLi.append(cloth_name);	
					mLi.append(cloth_price);
					$('.floor .beauty .num'+mainIndex+' .cloth_list ').append(mLi);
				}
			}
		},
		error:function(res){
			alert("error");
		}
	});
//1楼的轮播图
	var i = 0;
	/*
	 无法获取imgwidth、 未解决
	 */
	var imglength = $('#cloths .carousel .carousel_list li a img').width();
//	console.log(imglength);

	//克隆第一张图片	
	var clone = $('#cloths .carousel .carousel_list li').first().clone(true);
	$('#cloths .carousel .carousel_list').append(clone);	
	//获取li的长度
	var size = $('#cloths .carousel .carousel_list li').size();
	$('#cloths .carousel .left_floor').click(function(){
		 moveLeft();	 
	});

	$('#cloths .carousel .right_floor').click(function(){
		 moveRight();
	});	
//圆点的hover移动
	$('#cloths .carousel .carousel_num li').hover(function(){
		//移到哪个点，就把他的index保存下来给i。他的index和i都是同步  ，从0开始
		i = $(this).index();
		$('#cloths .carousel .carousel_list').stop().animate({left:-439*i},500);
		$(this).addClass('active').siblings().removeClass('active');
	})
	
	function moveLeft(){
		i--;
		if (i == -1) {
			$('#cloths .carousel .carousel_list').css('left',-(size-1)*439);
			i=size-2;
		}
		$('#cloths .carousel .carousel_list').stop().animate({left:-439*i},500)
		//圆点
		$('#cloths .carousel .carousel_num li').eq(i).addClass('active').siblings().removeClass('active');
	}
	function moveRight(){
		i++;
		if (i == size) {
				$('#cloths .carousel .carousel_list').css({'left':'0px'});
				i=1;
		}
		$('#cloths .carousel .carousel_list').stop().animate({left:-439*i},500);
		//因为i：跟圆点的下标一致，给当前圆点添加颜色其余颜色去掉
		if (i == size-1) {
			$('#cloths .carousel .carousel_num li').eq(0).addClass('active').siblings().removeClass('active');
		}else{
			$('#cloths .carousel .carousel_num li').eq(i).addClass('active').siblings().removeClass('active');
		}
	}
	var timer = setInterval(moveRight,3000);
		$('#cloths .carousel').hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(moveRight,3000);
		})
})
//2楼
$(function(){
		$('.floor .beauty .tab li').hover(function(){
		//li的颜色hover时变色
		$(this).addClass('list').siblings().removeClass('list');
		$(this).children('span').hide();
		//获取li的index值，当hover时  ，改变对应.main显示和隐藏
		var index =  $(this).index();	
		$('.floor .beauty .mc .main').eq(index).show().siblings('.main').hide();
	},function(){
		$(this).children('span').show();
	})	
//2楼的轮播图
	var i = 0;
	/*
	 无法获取imgwidth
	 */
	var imglength = $('.floor .beauty .carousel .carousel_list li a img').width();
//	console.log(imglength);

	//克隆第一张图片	
	var clone = $('.floor .beauty .carousel .carousel_list li').first().clone(true);
	$('.floor .beauty .carousel .carousel_list').append(clone);	
	//获取li的长度
	var size = $('.floor .beauty .carousel .carousel_list li').size();
	//左箭头
	$('.floor .beauty .carousel .left_beauty').click(function(){
		 moveLeft();	 
	});
	//右箭头
	$('.floor .beauty .carousel .right_beauty').click(function(){
		 moveRight();
	});	
//圆点的hover移动
	$('.beauty .carousel .carousel_num li').hover(function(){
		//移到哪个点，就把他的index保存下来给i。他的index和i都是同步  ，从0开始
		i = $(this).index();
		$('.beauty .carousel .carousel_list').stop().animate({left:-340*i},500);
		$(this).addClass('active').siblings().removeClass('active');
	})
	
	function moveLeft(){
		i--;
		if (i == -1) {
			$('.beauty .carousel .carousel_list').css('left',-(size-1)*340);
			i=size-2;
		}
		$('.beauty .carousel .carousel_list').stop().animate({left:-340*i},500)
		//圆点
		$('.beauty .carousel .carousel_num li').eq(i).addClass('active').siblings().removeClass('active');
	}
	function moveRight(){
		i++;
		if (i == size) {
				$('.beauty .carousel .carousel_list').css({'left':'0px'});
				i=1;
		}
		$('.beauty .carousel .carousel_list').stop().animate({left:-340*i},500);
		//因为i：跟圆点的下标一致，给当前圆点添加颜色其余颜色去掉
		if (i == size-1) {
			$('.beauty .carousel .carousel_num li').eq(0).addClass('active').siblings().removeClass('active');
		}else{
			$('.beauty .carousel .carousel_num li').eq(i).addClass('active').siblings().removeClass('active');
		}
	}
	var timer = setInterval(moveRight,3000);
		$('.beauty .carousel').hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(moveRight,3000);
		})
})
