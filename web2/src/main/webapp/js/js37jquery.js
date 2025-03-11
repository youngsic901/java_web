/*
window.onload = function () {
    alert("a");
}*/

//$() : Factory 함수 - 문서를 객체화함. jQuery()와 동일($문자가 중복될 경우)
$(document).ready(function () {
    // alert("b");
    // 선택자 : 태그 내 태그명(요소), 속성(클래스, 아이디), 값
    $("p").css("border", "1px solid #ff0000"); // 요소 선택
    $(".my").css("border", "1px dotted cyan"); // 클래스 선택
    jQuery("div div#content").css("background-color", "yellow"); // 아이디 선택
    $("span > i").css("color", "red").css("font-size", "20px"); // method chain
});

// $(document).ready(function () {});
$(function() { // 위와 동일
    $("strong#kor").css("color", "orange").addClass("korea"); // .korea를 추가
});

$(document).ready(function () {
    $("div > a[target]").css("background-color", "silver");
    $("div > a[href='https://korea.com']").css("font-size", "30px");

    // 셀렉터에 정규표현식 사용
    $("div[id^='sb']").css("background-color", "gold"); // id 속성값이 sb로 시작되는 ...
    $("div[id$='c']").css("background-color", "green"); // id 속성값이 c로 끝나는 ...

    $("a[href*='daum']").css("color", "light gray").css("font-size", "40px"); // href 속성값에 daum 문자열이 포함된...
});

$(document).ready(function () {
    // 실행 중  요소 추가
    // $("b") //document.getElementsByTabName("b") document.querySelector("b") <---- 같은 의미

    // 특정 요소 앞에 요소 추가
    // $("b").prepend("<h2>요소추가(기본 요소 앞)</h2>");
    // $("<h2>요소추가(기본 요소 앞)</h2>").prependTo("b"); // 위와 결과 동일

    // 특정 요소 뒤에 요소 추가
    // $("b").append("<h6>요소추가(기본 요소 뒤)</h6>");
    $("<h6>요소추가(기본 요소 뒤)</h6>").appendTo("b"); // 위와 결과 동일

    // 요소 수 만큼 반복 처리
    let ss = "";
    $("li").each(function () {
        // ss += $(this).text() + "<br>"; // this : 현재 반복대상 요소.      text() : innerText
        ss += $(this).html() + "<br>"; // html() : innerHTML
    });
    // $("#show").text(ss);
    $("#show").html(ss);
});