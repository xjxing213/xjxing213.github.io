		var clipboard = new Clipboard('#copyData');
		clipboard.on('success', function(e) {
			checkInputStr(e.text);
			alert("复制成功!");
		});	
		
		var clipboard = new Clipboard('#copyRet');
		clipboard.on('success', function(e) {
			checkInputStr(e.text);
			alert("复制成功!");
		});	

		function setStr(str) {
			if (str != '') {
				$("#ret_data").val(str);
			}else{
				$("#ret_data").val("无数值");
			}
		}		

		$("#clear").click(function(){
			$("#org_data").val("");
			$("#ret_data").val("");
		});

		// <!-- 开始计算 -->
		$("#calc").click(function(){
		var str = $("#org_data").val();
		checkInputStr2(str,"原数据");
		// 匹配正负整数及浮点数
		var reg=/(\-*\d+\.\d+)|(\-*\d+)/gm; 
	   var arr=str.match(reg);
	   var sum=0;var product=1
	   for (i=0;i<arr.length;i++){
		   sum=sum+parseFloat(arr[i]);
		   product=product*parseFloat(arr[i]);
	   }	   
		var max = Math.max.apply(null, arr);
		var min = Math.min.apply(null, arr);
		var average=sum/arr.length;
		// 数组去重
		  var hash=[];
		  for (var i = 0; i < arr.length; i++) {
			 if(hash.indexOf(arr[i])==-1){
			  hash.push(arr[i]);
			 }
		  }
		var hash2=hash		
		// for(var j=0;j<hash.length-1;j++){
			// //两两比较，如果前一个比后一个大，则交换位置
				// for(var i=0;i<hash.length-1-j;i++){
					// if(parseFloat(hash[i])>parseFloat(hash[i+1])){
						// var temp = hash[i];
						// hash[i] = hash[i+1];
						// hash[i+1] = temp;
					// }
				// } 
			// }
			
		for(var j=0;j<hash2.length-1;j++){
		//两两比较，如果前一个比后一个大，则交换位置。
			for(var i=0;i<hash2.length-1-j;i++){
				if(parseFloat(hash2[i])<parseFloat(hash2[i+1])){
					var temp = hash2[i];
					hash2[i] = hash2[i+1];
					hash2[i+1] = temp;
				}
			} 
		}
		str="求和：" + sum + "\n";
		str=str+"求积：" + product + "\n";
		str=str+"平均值：" + average + "\n";
		str=str+"最大值：" + max + "\n";
		str=str+"最小值：" + min + "\n";
		str=str+"计数：" + arr.length + "\n";
		// str=str+"大到小：" + hash.toString() + "\n";
		str=str+"排序(大到小)：" + hash2.toString();
		$("#ret_data").val(str);
		});



