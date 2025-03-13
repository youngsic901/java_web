<%-- page 지시어 : 현재 문서의 속성이나 정보 등을 선언 또는 지시하는 역할 --%>
<%-- page 지시어 안쪽에 import문 작성--%>
<%@ page
        contentType="text/html;charset=UTF-8"
        pageEncoding="UTF-8"
        import="java.time.LocalDate"
        import="java.sql.Connection, java.sql.ResultSet"
%>
<%@ page
        language="java"
        session="true"
        buffer="8kb"
        autoFlush="true"
        isThreadSafe="true"
        info="jsp문서정보 기록"
%><%-- language ~~~ info 까지의 정보는 기본값이므로 생략--%>
<%@ page import="java.time.ZoneId" %>
<%@ page errorPage="jspex2err.jsp" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h2>page 지시어</h2>
현재 날짜 :
<%
    LocalDate now = LocalDate.now(ZoneId.of("Asia/Seoul"));
    out.println(now.getYear() + "년 " + now.getMonthValue() + "월 ");
%>
<%= now.getDayOfMonth()+ "일"%>
<hr>
<%= 10 / 0 %><%-- 문법에러, 런타임에러(처음부터 0으로 나눈 경우) 등은 개발자가 수정한다. --%>
<%-- 하지만 정상적으로 작동하던 페이지가 예상치 못한 에러를 만난 경우는 별도의 화면을 제공해 주는 것이 효과적 --%>
</body>
</html>
