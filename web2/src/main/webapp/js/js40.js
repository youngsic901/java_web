$(document).ready(function(){
   $("#btnXml").click(function(){
       // alert("xml");
       $("#show1").empty();
       $.ajax({
          type: "GET",
          url:"js40dbxml.jsp",
          dataType: "xml", // 반환 type
          success:function(datas){
             // alert($(datas).find("sangpum").length);
             $(datas).find("sangpum").each(function(){
                let obj = $(this);
                let str = "<div>";
                str += obj.find("code").text() + " ";
                str += obj.find("sang").text() + " ";
                str += obj.find("su").text() + " ";
                str += obj.find("dan").text() + " ";
                str += "<div>";
                $("#show1").append(str);
             });
          },
          error:function(){
             $("#show1").append("xml 읽기 오류");
          }
       });
   });

   $("#btnJson").click(function(){
      // alert("json");
      $("#show2").empty();
      $.ajax({
         type: "GET",
         url:"js40dbjson.jsp",
         dataType: "json",
         success:function(datas){
            // alert(datas.sangpum.length);
            $.each(datas.sangpum, function(idx, data){
               let str = "<div>";
               str += data["code"] + " ";
               str += data["sang"] + " ";
               str += data["su"] + " ";
               str += data["dan"] + " ";
               str += "<div>";
               $("#show2").append(str);
            });
         },
         error:function(){
            $("#show2").append("json 읽기 오류");
         }
      });
   });
});