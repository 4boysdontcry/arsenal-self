/*************** 글로벌 설정 *****************/


/*************** 사용자 함수 *****************/


/*************** 이벤트 등록 *****************/
$('.bot-header .bot-navi').on('mouseenter', onShowSubNavi)
$('.sub-navi-wrapper').on('mouseleave', onHideSubNavi)

/*************** 이벤트 콜백 *****************/
function onShowSubNavi(){
    $('.news').show()
}

function onHideSubNavi(){
    $('.sub-navi-wrapper').hide()
}