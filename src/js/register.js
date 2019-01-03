//获取元素
var $mobile = $('#mobile');
var $pwd = $('#upwd');
var $againpwd = $('#againpwd')
var $encode = $('#encode');
var $reg = $('#register');
var $i_a = $('#i_a');
var $i_b = $('#i_b');
var $i_c = $('#i_c');
var $i_d = $('#i_d');
var $i_e = $('#i_e');

var arr = [false,false,false,false];
//alert($uname)
//设置失焦事件
$mobile.blur(function(){
	//alert(this);
	var uMobile = $(this).val();
	//alert(uName);
	var re = /\d{11}/;
	if(!re.test(uMobile)){
		//alert($namespan)
		$i_a.css({'display' : 'block'});
		arr[0] = false;
	}else{
		$i_a.css({'display' : 'none'});
		arr[0] = true;
	}
	
})
$pwd.blur(function(){
	var uPwd = $(this).val();
	var re = /^[\w]{6,20}$/;
	if(!re.test(uPwd)){
		$i_d.css({'display' : 'block'});
		arr[1] = false;
	}else{
		$i_d.css({'display' : 'none'});
		arr[1] = true;
	}
})
$againpwd.blur(function(){
	var uApwd = $(this).val();
	if(uApwd === $pwd.val()){
		$i_e.css({'display' : 'none'});
		arr[2] = true;
	}else{
		$i_e.css({'display' : 'block'});
		arr[2] = false;
	}
})
$encode.blur(function(){
	var encode = $(this).val();
	if(encode === '9eWW'){
		$i_b.css({'display' : 'none'});
		arr[3] = true;
	}else{
		$i_b.css({'display' : 'block'});
		arr[3] = false;
	}
})
$reg.click(function(event){
	//alert($uname.val())
	var uMobile = $mobile.val();
	//alert(uName);
	var uPwd = $pwd.val();
	//alert(uPwd);
	if(!uMobile){
		alert('手机号码不能为空！');
		return;
	}
	if(arr.indexOf(false) != -1){
		alert('请正确填写信息！');
		return;
	}
	// alert('1');
	var cookieStr = $.cookie('user') ? $.cookie('user') : '';
	var cookieObj = convertCookieStrToObj(cookieStr);
	//alert(user);
	if(uMobile in cookieObj){
		alert('手机号已注册！');
	}else{ 
		cookieObj[uMobile] = uPwd;
		cookieStr = convertObjToCookieStr(cookieObj);
		//alert(JSON.stringify(cookieObj));
		$.cookie('user',cookieStr,{expires : 7,path : '/'});
		alert('注册成功！');
		location.href = './login.html';
		alert('');
	}
	//alert(decodeURIComponent(document.cookie));
})






function convertCookieStrToObj(str){
		if(!str){
			return {};
		}
		
		var arr = str.split(','); 
		//console.log(arr);
		var obj = {};
		for(var i = 0;i < arr.length;i ++){
			var list = arr[i].split(':');
			obj[list[0]] = list[1];
		}
		return obj;
	}
	//将对象转为cookie字符串
	function convertObjToCookieStr(obj){
		var str = '';
		for(var i in obj){
			var pwd = obj[i];
			if(str){
				str += ',';
			}
			str += i + ':' + pwd;
		}
		return str;
	}
