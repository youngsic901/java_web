<%@ page
        contentType="text/html;charset=UTF-8"
        pageEncoding="UTF-8"
%>
<%
    request.setCharacterEncoding("utf-8");
    // String name = request.getParameter("name"); // 지금까지는 이렇게 함. 이제 빈즈를 사용함
%>
<jsp:useBean id="formBean" class="pack.Jspex11FormBean"/>
<%--
<jsp:setProperty name="formBean" property="name"/>&lt;%&ndash; 낱개로 받음&ndash;%&gt;
--%>
<jsp:setProperty name="formBean" property="*"/> <%-- 자동으로 모든 값이 setter를 통해 저장됨 --%>

<html>
<head>
    <title>Title</title>
    <script src="https://kit.fontawesome.com/90a80de824.js" crossorigin="anonymous"></script>
</head>
<body>
폼빈에 저장된 자료 출력<br>
이름은 <jsp:getProperty name="formBean" property="name"/><br>
국어는 <jsp:getProperty name="formBean" property="kor"/><br>
영어는 <jsp:getProperty name="formBean" property="eng"/><br>
<%-- 계산을 위한 클래스 Beans 사용--%>
<jsp:useBean id="logic" class="pack.Jspex11Logic" />
<jsp:setProperty name="logic" property="formBean" value="<%=formBean%>"/>
총점은 : <jsp:getProperty name="logic" property="tot"/>
평균은 : <jsp:getProperty name="logic" property="avg"/>
<a class="fa-brands fa-github fa-bounce"></a>

</body>
</html>
