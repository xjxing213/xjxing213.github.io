function checkInputStr(str){	
if(str == null || str.length==0){		
alert("输入框未输入任何内容！");		
return ;	
}}
function checkInputStr2(str,id){	
if(str == null || str.length==0){		
alert(id+ "输入框内未输入任何内容！");		
return ;	
}}
function checkInputStr3(str,id,dot_val){	
if(str != "" && str.split(dot_val).length !=1){		
alert(id+ "数量大于1");		return ;	}}
function isRealNum(val){    // isNaN()函数 把空串 空格 以及NUll 按照0来处理 所以先去除    
if(val === "" || val ==null){        
return 1;    }else if(!isNaN(val) && val>0 && val%1 === 0){        
return 2;    }else{        
return 3;    
}}
