
	
		$(function(){
			$("#p1").click(function(){
			$("#tip").text("模式一：新内容默认“-”分开，数量相等，如替换的新内容含有分隔符，请在选择其他分隔符");
			$("#new_keyw").text("1-2-3");
			});
		});
		
		$(function(){
			$("#p2").click(function(){
			$("#tip").text("模式二：查找内容默认“-”分开，要求查找内容数>=1，新内容数=1或为空【即旧词全部替换为一个新词或全部清除】，如关键词含有分隔符，请在选择其他分隔符");
			$("#new_keyw").text("666");
			});
		});

	
		var clipboard = new Clipboard('#copy');
		clipboard.on('success', function(e) {
			checkInputStr(e.text);
			alert("复制成功!");
		});	
	
		function setStr(str) {
			if (str != '') {
				$("#rped_data").val(str);
			}else{
				$("#str_count").text("字符为空！");	
			}
		}
		
		$("#clear").click(function(){
			$("#org_data").val("");
			$("#old_keyw").val("");
			$("#new_keyw").val("");
			$("#hg").attr("checked",'checked');
		});
		
		// <!-- 开始批量替换 -->
		$("#start_rp").click(function(){		
		var str = $("#org_data").val();
		var old_keyw = $("#old_keyw").val();
		var new_keyw = $("#new_keyw").val();
		var dot_val = $("input[name='dot']:checked").val();
		checkInputStr2(str,"查找内容");
		checkInputStr2(old_keyw,"查找内容");		
		
		if($("input[name='pattern']:checked").val()=="p1"){
				checkInputStr2(new_keyw,"新内容");
				var oldkw_arr=old_keyw.split(dot_val);
				var newkw_arr=new_keyw.split(dot_val);
				var oldkw_len = oldkw_arr.length;
				var newkw_len = newkw_arr.length;
				if(oldkw_len == newkw_len){
					var arr = ["$", "*", "(", ")", "+", ".", "[", "?", "\\", " ^ ", "{", "|"]
					for (var j = 0; j < arr.length; j++) {
						for(var i=0; i< oldkw_len; i++){
						if (oldkw_arr[i] == arr[j]) { oldkw_arr[i] = '\\' + oldkw_arr[i];}	
						}}
					for(var i=0; i< oldkw_len; i++){
						if($("input[name='case']:checked").val()=="y"){
							var re = new RegExp(oldkw_arr[i], "gm");
						}else if($("input[name='case']:checked").val()=="n"){
							var re = new RegExp(oldkw_arr[i], "igm");
						}
						str = str.replace(re, newkw_arr[i]);
					}
					setStr(str);
				}else{alert("新旧内容数量不一致，请重新输入");} 
		
		}else if($("input[name='pattern']:checked").val()=="p2"){
				checkInputStr3(new_keyw,"新内容",dot_val);
				var oldkw_arr=old_keyw.split(dot_val);
				var newkw_arr=new_keyw.split(dot_val);
				var oldkw_len = oldkw_arr.length;
				var newkw_len = newkw_arr.length;
					var arr = ["$", "*", "(", ")", "+", ".", "[", "?", "\\", " ^ ", "{", "|"]
					for (var j = 0; j < arr.length; j++) {
						for(var i=0; i< oldkw_len; i++){
						if (oldkw_arr[i] == arr[j]) { oldkw_arr[i] = '\\' + oldkw_arr[i];}	
						}}
					for(var i=0; i< oldkw_len; i++){
						if($("input[name='case']:checked").val()=="y"){
							var re = new RegExp(oldkw_arr[i], "gm");
						}else if($("input[name='case']:checked").val()=="n"){
							var re = new RegExp(oldkw_arr[i], "igm");
						}
						str = str.replace(re, new_keyw);
					}
				setStr(str);	
		}
		});

