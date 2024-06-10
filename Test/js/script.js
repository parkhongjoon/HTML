$(function(){
    $('.slide').slick({
        slidesToShow: 3,
        autoplay: true,
        infinite : true,  //무한 반복 옵션  
        autoplaySpeed: 1000,
        prevArrow: false,
        nextArrow: false,
      });
      $('.slide2').slick({
        slidesToShow: 9,
        autoplay: true,
        infinite : true,  //무한 반복 옵션  
        autoplaySpeed: 1000,
        prevArrow: false,
        nextArrow: false,
      });
});

new daum.roughmap.Lander({
  "timestamp" : "1709867917406",
  "key" : "2iepm",
  "mapWidth" : "640",
  "mapHeight" : "360"
}).render();