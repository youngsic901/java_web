<%@ page
        contentType="text/html;charset=UTF-8"
        pageEncoding="UTF-8"
%>
<jsp:useBean id="formBean" class="pack.Jspex12FormBean"/>
<jsp:setProperty name="formBean" property="*"/>
<jsp:useBean id="logic" class="pack.Jspex12Logic"/>
<jsp:setProperty name="logic" property="formBean" value="<%=formBean%>"/>
<html>
<head>
    <title>Title</title>
</head>
<body>
과일 <jsp:getProperty name="formBean" property="fname"/>의 구매가격은 <jsp:getProperty name="logic" property="discountPrice"/>원
</body>
</html>
