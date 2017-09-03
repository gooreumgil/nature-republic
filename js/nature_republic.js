var changeImg = {
  logo: {
    origin: './imgs/NATURE%20REPUBLIC_fullback.png',
    over: './imgs/NATURE%20REPUBLIC_white_back.png',
  },
  login: {
    origin: 'imgs/login_fullback.png',
    over: 'imgs/top_icon1.png',
  },
  cart: {
    origin: 'imgs/cart_fullback.png',
    over: 'imgs/top_icon2.png',
  },
  cart_number: {
    origin: 'imgs/cart_number_fullback.png',
    over: 'imgs/cart_number.png'
  },
  search: {
    origin: 'imgs/search_fullback.png',
    over: 'imgs/top_icon3.png'
  }
};

$(document).ready(function() {
  var header = $('header');
  window.addEventListener('scroll', function(e){
    var scollY = window.scrollY;
    if (scrollY > 50) {
      headerSetOverScroll(header);
    } else {
      headerSetDefault(header);
    }
  })
})

/**
 * 원래 위치로 스크롤 했을 때 header 스타일 셋
 * @param  {jquery dom} header
 */
function headerSetDefault (header) {
  header.css('background-color', 'transparent');
  header.find('li a').css('color', '#fff');
  header.find('img.logo').attr('src',changeImg.logo.origin);
  header.find('.a1 img').attr('src', changeImg.login.origin);
  header.find('.a2 .cart-img').attr('src', changeImg.cart.origin);
  header.find('.a2 .cart-number').attr('src', changeImg.cart_number.origin);
  header.find('.icon .a2 div .cart_number p').css('color', '#7ebb34');
  header.find('.a3 img').attr('src', changeImg.search.origin);
  header.css('box-shadow', 'none');

}

/**
 * 스크롤이 아래로 내려갔을 때 header 스타일 셋
 * @param  {jquery dom} header
 */
function headerSetOverScroll (header) {
  header.css('background-color', 'white');
  header.find('li a').css('color', '#555');
  header.find('img.logo').attr('src',changeImg.logo.over);
  header.find('.a1 img').attr('src', changeImg.login.over);
  header.find('.a2 .cart_inner .cart-img').attr('src','imgs/top_icon2.png');
  header.find('.a2 .cart_inner .cart-number').attr('src', changeImg.cart_number.over);
  header.find('.icon .a2 div .cart_number p').css('color', 'white');
  header.find('.a3 img').attr('src', changeImg.search.over);
  header.css('box-shadow', '0 0 1px 0 #dcdcdc');
}
