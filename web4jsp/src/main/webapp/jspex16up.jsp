<%@ page import="pack.SangpumDto" %>
<%@ page
        contentType="text/html;charset=UTF-8"
        pageEncoding="UTF-8"
%>
<%
    String code = request.getParameter("code");
%>

<jsp:useBean id="dbConnPooling" class="pack.DbConnPooling"/>
<html>
<head>
    <title>Title</title>
</head>
<body>
<%
    SangpumDto dto = dbConnPooling.updateDataRead(code);
    if(dto == null){
%>
        <script type="text/javascript">
            alert("등록된 상품 코드가 아닙니다.");
            location.href = "jspex16dbcp.jsp";
        </script>
<%
    }
%>
* 상품 수정 *<br>
<form action="jspex16upok.jsp" method="post">
    코드 : <br>
    <label for="sang">품명 :</label>
    <input type="text" name="sang" id="sang" value="<%=dto.getSang()%>"><br>
    <label for="su">수량 :</label>
    <input type="text" name="su" id="su" value="<%=dto.getSu()%>"><br>
    <label for="dan">단가 :</label>
    <input type="text" name="dan" id="dan" value="<%=dto.getDan()%>"><br>
    <input type="submit" value="자료 수정">
    <input type="button" value="수정 취소" onclick="javascript:location.href='jspex16dbcp.jsp'">
</form>
</body>
</html>
