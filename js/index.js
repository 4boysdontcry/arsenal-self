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
