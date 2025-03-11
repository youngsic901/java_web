$(function() {
    $("#tdclickFunc").click(function () { tdclickFunc('이벤트 처리'); });
});

function tdclickFunc(msg){
    alert(msg);
}

$(document).ready(function () {
    $("td").click(function () {
       alert($(this).text());
    });

    $("div.hello").dblclick(function () {
       alert($(this).text());
    });

    $("#txtA").keydown(function (e) {
       $("#txtCode").val(e.keyCode);
    });
    
    // bind 메소드로 이벤트 장착, unbind : 해제
    // addEventListener() : js
    // $("#btn").onclick(function () {...});
    $("#btn").bind("click", function () {
        alert("버튼 이벤트 장착 후 실행");

        $("#btn").unbind("click");
    });

    let count = 0;
    $("#myArea").bind("mouseenter mouseleave", function (event){
       count += 1;
       $("#msgResult").text(count + "enter 또는 leave");

       if(event.type === "mouseenter") {
           $("#msgResult").css("background-color", "red");
       } else if(event.type === "mouseleave") {
           $("#msgResult").css("background-color", "yellow");
       }
    });
});