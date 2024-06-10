$(document).ready(function(){

    $("#cart").click(function(){
        alert('클릭');
        // const form = $("#detail-form").serializeArray();
        // console.log(form);
    });

    // const myCart = getCart();
    // if(myCart.length > 0) {
    //     $('.cartview').show();
    // }

});

//장바구니 보기
function getCart() {
    return JSON.parse(localStorage.getItem('cart'))  || [];
}

//장바구니에 상품 추가
function addCart(product){
    const cart = getCart();
    
}
