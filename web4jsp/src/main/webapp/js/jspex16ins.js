$(document).ready(function () {
    // alert("aa");
    $("#btnIns").click(function() {
       if($("#sang").val() === ""){
           alert("상품명 입력");
           return;
       } else if(isNaN($("#sang").val()) === false){
           alert("상품명 문자만 허용!");
           $("#sang").val("");
           return;
       }
       // 수량, 단가는 생략

        $("#frm").submit();
    });

    $("#btnList").bind("click", listFunc);
});

function listFunc() {
    // alert("w");
    // history.back(); // 이전으로 복귀
    location.href = "jspex16dbcp.jsp"; // 특정 페이지로 이동
}