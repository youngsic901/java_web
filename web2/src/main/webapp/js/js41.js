$(document).ready(function(){
   $("#btnSearch").click(function(){
       $("#show").empty();
       $("#showCount").empty();

       let bname = $("#name").val();
       // alert(bname);

       $.ajax({
          type: "GET",
          url: "js41jikwon.jsp",
          data: {"name": bname},
          dataType: "json",
          success: function(datas){
              // alert(datas.jikwons.length);
              let count = 0;
              let str = "<table border='1'>";
              str += "<tr><th>사번</th><th>직원명</th><th>직급</th><th>관리고객수</th></tr>"

              $.each(datas.jikwons, function(idx, data){
                  str += "<tr>";
                  str += "<td>" + data["jikwonno"] + "</td>";
                  if(Number(data["jikwongogek"]) === 0){
                      str += "<td>" + data["jikwonname"] + "</td>";
                  } else {
                      str += "<td><a href='javascript:func(" + data["jikwonno"] + ")'>" + data["jikwonname"] + "</a></td>";
                  }
                  str += "<td>" + data["jikwonname"] + "</td>";
                  str += "<td>" + data["jikwongogek"] + "</td>";
                  str += "</tr>";
                  count += 1;
              });

              str += "</table>";
              $("#show").append(str);
              $("#showCount").append(count);
          },
           error: function(datas){
              $("#show").append("직원 읽기 에러");
           }
       });
   });
});

function func(para){
    // alert(para);
    $("#gogek").empty();

    $.ajax({
       type: "POST",
       url: "js41gogek.jsp",
       data: {"arg": para},
       dataType: "json",
       success: function(datas){
           let str = "<table border='1'>";
           str += "<tr><th>고객명</th><th>전화</th></tr>";
           $.each(datas.gogeks, function(idx, data){
               str += "<tr>";
               str += "<td>" + data["gogekname"] + "</td>";
               str += "<td>" + data["gogektel"] + "</td>";
               str += "</tr>";
           })
           str += "</table>";
           $("#gogek").append(str);

       },
       error: function(datas){
           $("#gogek").text("고객 읽기 오류");
       }
    });
}