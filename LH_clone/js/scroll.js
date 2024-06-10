$(function(){
    $(window).scroll(function(){
       let top = $(window).scrollTop();
       console.log(top);
       if(top > 600) {
          $("#new .row").addClass("animate__animated");
       }else if(top < 600){
          $("#new .row").removeClass("animate__animated");
       }
    }); 
  });