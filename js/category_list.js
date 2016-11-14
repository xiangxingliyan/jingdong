$(function(){
	$.ajax({
		type:"get",
		url:"js/allGoodsList.json",
		async:true,
		success:function(data){
			console.log(data);
			//获取左侧大标题
			for (var i = 0;i < data.length;i++) {
				var mH3 = $('<h3><a href="#">'+data[i].firstTitle+'</a></h3>');
//				console.log(mH3);
				$('#nav .category_list .list'+(i+1)).append(mH3);
				//内部上方的标题通过json导入
				for (var j = 0;j < data[i].header.length;j++) {

					var mheader = '<a href="#">'+data[i].header[j]+'<i>></i></a>';
					$('#nav .category_list .list'+(i+1)+' .electric .ele1').append(mheader);
				}
				//内部左侧的二级标题的获取
				for (var k = 0;k < data[i].firstContent.length;k++) {
//					console.log(data[i].firstContent[k].secondTitle);
					var mT = $('<a href="#">'+data[i].firstContent[k].secondTitle+'</a>');
					var mDl = $('<dl class="ele2"></dl>');
					var mDt = $('<dt></dt>');
					var mDd = $('<dd></dd>');
					
					mDt.append(mT);
					mDl.append(mDt);
					
				
					//内部左侧的内容的获取
//					console.log(data[i].firstContent[k].secondContent.length);
					for (var x=0 ;x < data[i].firstContent[k].secondContent.length;x++) {
						var mContent = $('<a href="#">'+data[i].firstContent[k].secondContent[x] +' </a>');
						mDd.append(mContent);
						mDl.append(mDd);
					}
					$('#nav .category_list .list'+(i+1)+' .electric .ele1_content').append(mDl);
				}
				

			}
		}
	});
})