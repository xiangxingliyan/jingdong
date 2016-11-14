$(function(){
	//网站导航——特色主题
	$.ajax({
		type:"get",
		url:"js/web_nav_theme.json",
		async:true,
		success:function(res){
//			console.log(res);
			for (var i = 0 ;i < res.length;i++) {
				var oDiv = $('<ul><li><a href="#">'+res[i].name+'</a></li></ul>');
				$('#header .f8 .web_nav .nav1 dd').append(oDiv);
				}
		},
		error:function(){
			console.log('error')
		}	
	});
	//网站导航 ---行业频道
	$.ajax({
		type:"get",
		url:"js/web_nav_industry.json",
		async:true,
		success:function(res){
//			console.log(res);
			for (var i = 0 ;i < res.length;i++) {
				var oDiv = $('<ul><li><a href="#">'+res[i].name+'</a></li></ul>');
				$('#header .f8 .web_nav .nav2 dd').append(oDiv);
				}
		},
		error:function(){
			console.log('error')
		}	
	});
		//网站导航 ---生活服务
	$.ajax({
		type:"get",
		url:"js/web_nav_life.json",
		async:true,
		success:function(res){
//			console.log(res);
			for (var i = 0 ;i < res.length;i++) {
				var oDiv = $('<ul><li><a href="#">'+res[i].name+'</a></li></ul>');
				$('#header .f8 .web_nav .nav3 dd').append(oDiv);
				}
		},
		error:function(){
			console.log('error')
		}	
	});
		//网站导航 ---更多频道
	$.ajax({
		type:"get",
		url:"js/web_nav_more.json",
		async:true,
		success:function(res){
//			console.log(res);
			for (var i = 0 ;i < res.length;i++) {
				var oDiv = $('<ul><li><a href="#">'+res[i].name+'</a></li></ul>');
				$('#header .f8 .web_nav .nav4 dd').append(oDiv);
				}
		},
		error:function(){
			console.log('error')
		}	
	});
	//地址选中
	$('.headerleft .address a').each(function(){
		
		$(this).click(function(){
			//获取点击的文本
			$(this).addClass('active').siblings('a').removeClass('active');
			var aVal = $(this).html();
//			console.log(aVal);
			$('.sendTo span').html(aVal);
		})
	})
})



