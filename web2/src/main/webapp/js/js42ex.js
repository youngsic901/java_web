$(function (){
    $("#btnSearch").click(function(){
       $("#show").empty();

       let jname = $("#name").val();

       $.ajax({
           type: "GET",
           url : "js42ex.jsp",
           data : {"name": jname},
           dataType: "json",
           success: function (datas) {

               let str = "<table border='1'>";
               str += "<tr><th>사번</th><th>직원명</th><th>직급</th><th>연봉</th></tr>";

               $.each(datas.jikwon, function(idx, data){
                   str += "<tr>";
                   str += "<td>" + data["jikwonno"] + "</td>";
                   str += "<td>" + data["jikwonname"] + "</td>";
                   str += "<td>" + data["jikwonjik"] + "</td>";
                   str += "<td>" + data["jikwonpay"] + "</td>";
                   str += "</tr>";
               });

               str += "</table>";
               $("#show").append(str);
           },
           error: function (datas) {
               $("#show").append("고객 읽기 오류")
           }
       });
    });
});