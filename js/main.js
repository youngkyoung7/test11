$(document).ready(function(){
//반응형 웹사이트 자바스크립트 적용시키는 법
/*
1. 모바일일때 실행될 것들(함수) / 
   PC일때 실행될 것들(함수) /
   모바일+PC 항상 실행될 것들(함수)

2. 브라우저의 너비(디바이스의 사이즈)에
따라서 어떤 함수가 실행이 될지 결정지어야 한다.
-> 브라우저 사이즈를 늘였다 줄였다
반복했을때, 다른함수가 실행되지 않는다
-> 최초의 브라우저 너비값만을 인식해서
자바스크립트가 작동하기 때문 

3. 브라우저가 늘어나거나 줄어들때를 
인식하게 하여 그때마다 너비를 비교하고,
적절한 함수를 실행하게 한다 

*/
//브라우저너비에 따라 함수 만들기
let winWidth = $(window).width();

if(winWidth < 1261){
    mobile();
}else{
    pc();
}

// common();

//모바일 함수 시작
function mobile(){
    $('nav').css({'left':'-100%'});
    $('.search').show();

    $('.allBtn').on('click',function(){
        $('nav').stop().animate({'left': 0});
    });

    $('.close').on('click',function(){
        $('nav').stop().animate({'left':'-100%'});
    });
} //모바일
//pc함수 시작
function pc(){
    $('nav').css({'left': '10%'});
    $('.srcPc').on('click',function(){
        $('.search').slideToggle();
    })

} //pc
// function common(){} 
/*공통영역에 들어갈 자바스크립트 정리하려고 만든 함수
공통영역에 들어갈 자바가 없어서 비워둠
꼭 들어가야 하는 건 아님*/ 



//브라우저가 리사이징 될때마다 실행시키기!!!
$(window).on('resize',function(){

    let resizingWidth = $(window).width();
    
    if(resizingWidth < 1261){
        mobile();
    }else{
        pc();
    }

});//window.resize

})