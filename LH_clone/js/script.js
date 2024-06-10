$(function(){
  //gnb all 메뉴 열기
  let count =2;
  $('.btn-list').click(function(){
    $('#gnb').show();
  });
  $('.closebox').click(function(){
    $('#gnb').hide();
  });

  //main-nav
  $('.main-nav').hover(function(){
    $('.header-background').hide();
    $('.main-nav a, .logo, .btn-h-line, .ri-global-line, .ri-search-line').removeClass('black-font');
    $('.searchform,.btn-h-line').removeClass('black-border');
    $('.header-background').stop().slideToggle(200);
    $(".d-sub-title-before").removeClass('d-sub-title-before-hover');
    $(".d-sub-title").find("a").removeClass("act").addClass("black-font");
    $('.d-sub-title').find("span").removeClass("act");
    $('.main-nav a, .logo, .btn-h-line, .ri-global-line, .ri-search-line').stop().toggleClass("black-font");
    $('.searchform,.btn-h-line').stop().toggleClass("black-border");
 });

 
 $(window).scroll(function(){
  if($(window).scrollTop() > 0){
    $('.header-background').stop().slideDown(200);
    $('.main-nav a, .logo, .btn-h-line, .ri-global-line, .ri-search-line').stop().addClass("black-font");
    $('.searchform,.btn-h-line').stop().addClass("black-border");
  }else{
    $('.header-background').stop().slideUp(200);
    $('.main-nav a, .logo, .btn-h-line, .ri-global-line, .ri-search-line').stop().removeClass("black-font");
    $('.searchform,.btn-h-line').stop().removeClass("black-border");
  };
});

  $('.main-nav>li').hover(function(){
     $(this).find('.d-submenu-main').toggle();
  });

  $('.d-sub-title').prepend('<div class="d-sub-title-before"></div>');

  $('.d-sub-title').mouseenter(function(){
     $(".d-sub-title-before").removeClass('d-sub-title-before-hover');
     $(".d-sub-title").find("a").removeClass("act").addClass("black-font");
     $('.d-sub-title').find("span").removeClass("act");
     $(this).find(".d-sub-title-before").addClass('d-sub-title-before-hover');
     $(this).find("a").removeClass("black-font").addClass("act");
     $(this).find('span').addClass("act");
  });

  //배너 애니메이션

  setInterval(mySlide, 5000);
  function mySlide() {
    count++;
    if(count > 4){
      count = 1;
    }
    $('.count').text(count);
    $('.banner-in').animate({
      'left': '-504px'
    }, 500, function () {
      $('.banner-in img:eq(0)').clone().appendTo('.banner-in');
      $('.banner-in img:eq(0)').remove();
      $('.banner-in').css('left', 0);
    });
  }
}); //jquery 