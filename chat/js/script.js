$(function(){
   $(".submit").click(function(){
      if($("#username").val() == ""){
         alert("이름을 입력하세요.");
         $("#username").focus();
         return;
      }
      $("#loginform").submit();
   });
   
  $("#talk").on("keyup", function(e){
    //console.log(e.keyCode);
    if(e.keyCode == 13) {

    }
  });
});