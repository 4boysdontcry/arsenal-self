/*************** 글로벌 설정 *****************/
var naviLen = $('.navi').index
console.log(naviLen)
// console.log($(navi[0]))  // []안은 length값을 넣어 호출 가능 (0 ~ n)

/*************** 사용자 함수 *****************/

// var navi = $('.bot-header .navi')
// var subNavi = $('sub-menu .sub-navi-wrapper')
// var subIdx = each('.sub-navi-wrapper').length[each]

var navi = $('.navi')
var idx = navi.index()
console.log($(navi.idx()))


// /*************** 이벤트 등록 *****************/
// $(navi[idx]).on('mouseenter', showSubNavi)
// $(subNavi[subIdx]).on('mouseleave', hideSubNavi)


// /*************** 이벤트 콜백 *****************/
// function showSubNavi(){
//     subNavi[subIdx].show()
// }

// function hideSubNavi(){
//     $('.sub-navi-wrapper').hide()
// }

