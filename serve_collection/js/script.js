$(document).ready(function(){


    $('.ex_menu li').on('click',function(){

        $(this).addClass('on')
        .siblings().removeClass('on');

        //index(); 해당 요소의 index번호찾기
        let i = $(this).index();
        console.log(i);

$('.conWarp').children('.container').eq(i).show()
.siblings().hide();

});


})