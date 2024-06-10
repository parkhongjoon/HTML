$(function(){
    $(".imgzoom").click(function(e){
        e.preventDefault();
        const img = $(this).attr("href");
        const imgheight = img.imgheight();
        alert(imgheight);
        $('.zoombody').append("<img src='"+img+"' alt='"+img+"'>");
        $('.zoombox').fadeIn();
    });
});