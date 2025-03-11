<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<%
    request.setCharacterEncoding("utf-8"); // 한글 깨짐 방지

    String pwd = request.getParameter("pwd1");
    if(!pwd.equals("kor")){ // 비밀번호가 kor이 아닌 경우 html로 회귀
        response.sendRedirect("js39jquerycheck.html");
    }

    String id = request.getParameter("userid");
    String age = request.getParameter("age");

    out.println(id + "님의 나이는 " + age);
%>
</body>
</html>
