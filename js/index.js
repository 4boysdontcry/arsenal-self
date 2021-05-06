/*************** 글로벌 설정 *****************/
var $navi = $('.bot-header .navi')
var $subNavi = $('.sub-menu .sub-navi-wrapper')
var $monavi = $('.mo-navi-wrapper .mo-bars')
var $moSubnavi = $('.mo-subnavi-wrapper')
var $subClose = $('.mo-subnavi-wrapper .sub-close')


var len = $('.bot-header .navi').length
var subLen = $('.sub-menu .sub-navi-wrapper').length
var lastIdx = len - 1


/*************** 사용자 함수 *****************/
slideShop();



// /*************** 이벤트 등록 *****************/
$navi.on('mouseenter', onShowSubNavi)
$subNavi.on('mouseleave', onHideSubNavi)
$monavi.on('click', onShowMoSubnavi)
$subClose.on('click', onhideMoSubnavi)



// /*************** 이벤트 콜백 *****************/

function onhideMoSubnavi(){
    $moSubnavi.hide()
}

function onShowMoSubnavi(){
    $moSubnavi.show()
}

function onShowSubNavi(){
    $navi.css('color','rgba(255,255,255,0.5)').removeClass('active')
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
            html += '<div class="hover-bg"> <button>shop now</button> </div>';
            html += '</div>';
            html += '<div class="desc-wrap">';
            html += '<h4 class="subject">'+ v.subject +' </h4>';
            html += '<h3 class="title">'+ v.title +' </h3>';
            html += '<p class="price">'+ v.price +' </p>';
            html += '</div>';
            html += '</li>';
            $slideWrapper.append(html);
        })
        var swiper = getSwiper('.shop-wrapper', { break: 3, pager: true, navi: true });
		}
    $.get('../json/shop.json', onGetData);
}


function onThumbClick(){
	var src = $(this).attr('src');
	$('.main-stage > img').attr('src', src);
	$('.img-gallery > .img-wrap').removeClass('active');
	$(this).parent().addClass('active');
}
$('.img-gallery img').on('click', onThumbClick);