<%@ page
        contentType="text/html;charset=UTF-8"
        pageEncoding="UTF-8"
%>
<html>
<head>
    <title>Title</title>
</head>
<body>
<%@ include file="jspex3top.jsp"%> <%-- include : 소스 코드가 이 자리로 불려와 실행 --%>
<h1>파일 포함(include) 연습</h1>
<pre>
    여
    기
    는

    본문
</pre>

<%-- 파일 포함을 위한 jsp action tag 연습 --%>
jsp action tag의 대상은 jsp, servlet, html 모두 가능<br>
<jsp:include page="jspex3action1.jsp"/> <%-- jsp:include : 실행 결과가 이 자리에 표시됨 --%>
<br>
<jsp:include page="jspex3action2.jsp">
    <jsp:param name="msg" value="korea"/>
</jsp:include>

<%@include file="jspex3bottom.jsp"%>
</body>
</html>
