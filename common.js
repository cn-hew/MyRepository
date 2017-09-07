//状态格式化
function stateFormatter(v,r,i) {
	return v==0?'<font style="color: white;background: blue;">正常</font>':'<font style="color: red;background: yellow;">停用</font>';
}
function employeestateFormatter(v,r,i) {
	return v==0?'<font style="color: white;background: green;">正常</font>':'<font style="color: red;background: yellow;">离职</font>';
}
function solveFormatter(v,r,i) {
	return v==1?'<font style="color: white;background: blue;">解决</font>':'<font style="color: red;background: yellow;">未解决</font>';
}
//格式化对象
function objFormatter(value,row,index){
	if(value){
		return value.name || value.realName || value.username || value.title || value.sn ||value.inputTime;
	}
}

//格式化数组
function arrayFormatter(value,row,index){
	var result = '';
	if(value){
		//遍历数组的到对象
		for (var int = 0; int < value.length; int++) {
			var item = value[int];
			//去掉最后一个逗号
			if(int == value.length-1){
				if(item){
					//调用格式化对象
					result += objFormatter(item);
				}
			}else{
				if(item){
					//调用格式化对象
					result += objFormatter(item)+",";
				}
			}
		}
	}
	return result;
}

//在原型上扩展高级查询序列化表单数据
$.fn.serializeFrom = function(){
	//serializeArray:获取参数并装到一个集合中
	var param = {};
	var paramArray = $(this).serializeArray();
	$.each(paramArray,function(index,obj){
		//动态获取对象的属性和属性值并放到一个参数对象中
		param[obj.name] = obj.value
	})
	return param;
}


function ispayFormatter(v, r, i) {
	console.debug(v, r, i);
	if (v == 1) {
		return "已付款";
	} else if (v == 0) {
		return "<font style='color:red'>未付款</font>";
	}
}
function nameFormatter(value, row, index) {
	return value ? value.name||value.realName||value.sn : "";
}
		 
function orderStateFormatter(value, row, index) {
//	console.debug(value);
	return value==0?"<font color='green'>正常</font>":"<font color='red'>作废</font>";
}

function guaranteeStateFormatter(value, row, index) {
//	console.debug(value);
	return value==0?"<font color='green'>正常</font>":"<font color='red'>作废</font>";
}

function genderFormatter(value, row, index){
	return value==1?"男":"女";
}

function stateFormatter(value, row, index) {
//	console.debug(value);
	  return value==0?"<font color='green'>正常</font>":"<font color='red'>停用</font>";
	}

function  employeestateFormatter(value, row, index){
	return value==0?"<font color='green'>在职</font>":"<font color='red'>离职</font>";
}

$.fn.serializeJSON=function(){
	var json={};
	var array=$(this).serializeArray();
	for (var i = 0; i < array.length; i++) {
//			console.debug(array[i].name+"="+array[i].value)
		json[array[i].name]=array[i].value;
	}
	return json;
	
}
Number.prototype.toPercent=function(){
	return (Math.round(this * 10000)/100).toFixed(2) + '%';
}
