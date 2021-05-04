/*************** 글로벌 설정 *****************/
var $navi = $('.bot-header .navi')
console.log($navi)

var $subNavi = $('.sub-menu .sub-navi-wrapper')
console.log($subNavi)

var len = $('.bot-header .navi').length
console.log(len)

var subLen = $('.sub-menu .sub-navi-wrapper').length
console.log(subLen)

var lastIdx = len - 1
console.log(lastIdx)


/*************** 사용자 함수 *****************/
slideShop();



// /*************** 이벤트 등록 *****************/
$navi.on('mouseenter', onShowSubNavi)
$subNavi.on('mouseleave', onHideSubNavi)

// /*************** 이벤트 콜백 *****************/
function onShowSubNavi(){
    $navi.css('color','#ddd').removeClass('active')
    $(this).css('color','#fff').addClass('active')
    var idx = $(this).data('idx')
    $subNavi.hide()
    $subNavi.eq(idx).show()
}

function onHideSubNavi(){
    $subNavi.hide()
    $navi.css('color','#fff').removeClass('active')
}


function slideShop() {
    var $shop = $('.shop-wrapper');
    var $slideWrapper = $shop.find('.slide-wrapper');
    
    function onGetData(r) {
        r.shop.forEach(function (v, i) {
            var html = '';
            html += '<li class="slide">';
            html += '<div class="img-wrap">';
            html += '<img src="' + v.src + '" alt="의류" class="w-100">';
            html += '</div>';
            html += '<div class="desc-wrap">';
            html += '<h4 class="subject">'+ v.subject +' </h4>';
            html += '<h3 class="title">'+ v.title +' </h3>';
            html += '<p class="price">'+ v.price +' </p>';
            html += '</div>';
            html += '</li>';
            $slideWrapper.append(html);
        })
        var swiper = getSwiper('.shop-wrapper', { break: 3, speed: 600 });
		}
    $.get('../json/shop.json', onGetData);
}
