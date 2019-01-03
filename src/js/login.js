	//获取页面元素
	var $uname = $('#uname3');
	var $upwd = $('#upwd3');
	var $log = $('#user_login3');
	var $skip3 = $('#id_h3');
	var $skip2 = $('#id_h2');
	var $yzm = $('#L_content_a_2');
	var $mm = $('#L_content_a_3');
	var $id_a3 = $('#id_a3');
	var $id_b3 = $('#id_b3');
	var $id_c3 = $('#id_c3');
	//给登录方式添加点击事件
	$skip3.click(function(){
		$('#L_content_a_3').addClass('h');
		$('#L_content_a_2').removeClass('h');
		// alert('1');
	})
	$skip2.click(function(){
		$('#L_content_a_2').addClass('h');
		$('#L_content_a_3').removeClass('h');
		// alert('1');
	})
// 	//给账号框设置失焦事件
// 	$uname.blur(function(){
// 		var $uName = $(this).val();
// 		if(uPwd == ''){
// 			$id_c3.css({'display':'block'});
// 		}else{
// 			$id_c3.css({'display':'none'});
// 		}
// 	})
	//给密码框设置失焦事件
	$upwd.blur(function(){
		var uPwd = $(this).val();
		if(uPwd == ''){
			$id_c3.css({'display':'block'});
		}else{
			$id_c3.css({'display':'none'});
		}
	})
	//给登录按钮设置点击事件
	$log.click(function(event){
		
		var uName = $uname.val();
		var uPwd = $upwd.val();
		var cookieStr = $.cookie('user') ? $.cookie('user') : '';
		var cookieObj = convertCookieStrToObj(cookieStr);
		//alert(cookieStr)
		//alert(cookieObj[uName]);
		//alert(uPwd);
		if(cookieObj[uName] == uPwd){
			alert('登录成功')
			location.href = 'index.html';
		
		}else{
			alert('手机号与密码不匹配');
			$i_e.css({'display' : 'none'});
		}
	})


	//将cookie字符串转为cookie对象
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

