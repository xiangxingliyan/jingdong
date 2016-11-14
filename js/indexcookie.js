$(function(){
		
//		var allcookies = document.cookie;
// 		 var cookie_pos = allcookies.indexOf("name");
// 		 console.log(cookie_pos);	
		var namelist = [];
		count=0;//我的购物车的上标的数字（不完善）
		$('#related .mcontent li .car_btn').click(function(){
//			console.log($(this).siblings('.name').children('a').html());
//			console.log($(this).siblings('.price').children('a').html());

//			因为cookies的名字不能一样,会覆盖
			//找到他的父元素li的index，用于保存 不同的name
			var index = $(this).closest('li').index();
			console.log(index);
			
			var imgsrc = $(this).parent().siblings('.mc_img').find('img').attr('src');
			console.log('imgsrc:'+imgsrc);
			
			$.cookie("name"+index,$(this).siblings('.name').children('a').html(),{path:"/",expiress:7});
			$.cookie("price"+index,$(this).siblings('.price').children('a').html(),{path:"/",expiress:7});
			$.cookie("image"+index,imgsrc,{path:"/",expiress:7});
			

//			console.log('mingzi'+index+$.cookie("name"+index));
//			console.log('价格'+index+$.cookie("price"+index));
			count++;
			$('#logo .shopCar .car_count').html(count+1);
			alert("商品:"+$(this).siblings('.name').children('a').html()+"，添加购物车成功");
			
			
			
			

		})
				//将cookies放到右边购物车里
			for (var i=0 ; i<20;i++) {
			//获取商品名
			var body_car_name = ($.cookie("name"+i));
			//获取商品价格
			var body_car_price = ($.cookie("price"+i));
			var body_car_image = ($.cookie("image"+i));
//			console.log(body_car_image);
			
			var mimage = $('<img class="body_car_img" />');
			
			mimage.attr('src',body_car_image);
			var mli = $('<li></li>');
			mli.append(mimage);
			
			
			mli.append(body_car_name);
			mli.append(body_car_price);
			
			$('.contain .car_open .car_content').append(mli);
			}

})