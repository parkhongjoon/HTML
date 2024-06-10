$(document).ready(function(){

 
	$("#registerform").validate({
		rules : {
			userid : {
				required: ture,
				rangelength: [3, 10]
			}
		},
		message : {
			userid: {
				required: "아이디를 입력하세요.",
				rangelength: "아이디는 {0}자에서 {1}자까지 사용이 가능합니다."
			}
		}
	});
		
});