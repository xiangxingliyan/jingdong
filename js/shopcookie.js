$(function(){
//	切记:cookies的名字不能一样,会覆盖掉
		//循环遍历 name[1-100]，price[1-100]的cookies。 最多只能保存100个
		for (var i=0 ; i<100;i++) {
			//获取商品名
			var shopname = ($.cookie("name"+i));
			//获取商品价格
			var shopprice = ($.cookie("price"+i));
			var mli = $('<li></li>&nsbp;');
			mli.append(shopname);
			mli.append(shopprice);
			$('.shopCar_body .shop_list').append(mli);
		}
})