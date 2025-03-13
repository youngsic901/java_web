<%@ page import="java.lang.reflect.Array" %>
<%@ page import="java.util.ArrayList" %>
<%@ page
        contentType="text/html;charset=UTF-8"
        pageEncoding="UTF-8"
%>
<html>
  <head>
    <title>Title</title>
  </head>
  <body>
  jsp에 의해 호출된 파일임<br>
  수신 자료 :
  <%
//    String data = request.getParameter("mydata");
//    out.println("redirect : " + data);

    String data = (String)request.getAttribute("mydata");
    out.println("forward : " + data);

    out.println("<br>길동이 출력 : ");
    ArrayList<String> list = (ArrayList<String>)request.getAttribute("listdata");

    for(String ss:list){
      out.println(ss);
    }
  %>
  </body>
</html>
