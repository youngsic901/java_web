<%@ page
        contentType="text/html;charset=UTF-8"
        pageEncoding="UTF-8"
%>
<%
    // 세션 읽기
    if(session.getAttribute("userid") != null){
        // 사용자가 로그인 하고 이 파일을 호출한 경우
%>
<html lang="ko">
<head>
    <title>Title</title>
</head>
<body>
<h2>로그인(Authorization, 인가) 성공</h2>
<pre>
    쇼핑, 게시판, 회의참여
    등의 작업이 가능
</pre>
<a href="jspex8logout.jsp">로그아웃</a>
</body>
</html>
<%
    } else {
        // 사용자가 로그인 하지 않고 이 파일을 호출한 경우
        response.sendRedirect("jspex8login.html");
    }

%>
