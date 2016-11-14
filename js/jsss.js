			$(function(){
				$.ajax({
					type:"get",
					url:"https://dc.3.cn/category/get?callback=getCategoryCallback",
					dataType:"jsonp",
					jsonpCallback:"getCategoryCallback",
					scriptCharset:"gbk",
					success:function(res){
						var Data = res.data;
						
						for (var i = 0;i < Data.length;i++) {
							var s1n1 = Data[i].s[0].n.split("|")[1];
							var wangzhi = Data[i].s[0].n.split("|")[0].split("/")[0];
							var H3 = "";
//							H3 += '<h3><a href="#none">'+ s1n1 +'</a></h3>';
							H3 += '<h3><a href="'+ wangzhi +'">'+ s1n1 +'</a></h3>';
							$(".dd_inner .fore"+(i+1)).prepend(H3);
//							上面标题的添加
							for (var z = 0;z < Data[i].t.length;z++) {
		//						内部头部标题的添加
								var mh = Data[i].t[z].split("|")[1];
								var mHeader = $('<a href="#none">'+ mh +' <i>&gt;</i></a>');
//								console.log(mHeader);
								$('.fore'+(i+1)+' .fore_sub_top .channels').append(mHeader);
								
							}
							
							for (var j = 0; j < Data[i].s[0].s.length;j++) {
								//二级标题的添加
								//dl全是生成的
								//然后将dl附加到指定位置
								var s2n2 = Data[i].s[0].s[j].n.split("|")[1];
								var mA = $('<a href="#none">'+s2n2 +' <i>&gt;</i> </a>')
		//						分别生成dl dt dl 和dd里面的div
								var mDl = $("<dl></dl>");
								var mDt = $("<dt></dt>");
								var mDd = $("<dd></dd>");
								var mDiv = $("<div></div>");
								//三级标题附加到dt
								mDt.append(mA);
								//dt附加到dl
								mDl.append(mDt);
								
			//					console.log(Data[0].firstContent.length);
			//						三级标签内容
									for (var k = 0; k < Data[i].s[0].s[j].s.length;k++) {
			//							内容的长度
			//							console.log(Data[0].firstContent[j].secondContent.length);
										var mContent = $('<a href="#none">'+Data[i].s[0].s[j].s[k].n.split("|")[1] +' </a>')
										mDiv.append(mContent)
										mDd.append(mDiv);
										mDl.append(mDd);
			//							$(".fore_sub_bottom dl").append(mContent);
			//							console.log($(".fore_sub_bottom dl"));
									}
								$('.fore'+(i+1)+' .fore_sub_bottom').append(mDl);
									
							}

							
						}
					}
					
				});
				$(".dd_content .dd_inner li").mouseenter(function(){
					$(this).children("div").css("display","block");
					$(".all_content_right").css("display","none");
					
				}).mouseleave(function(){
					$(this).children("div").css("display","none");
					$(".all_content_right").css("display","block");
				})

			})
