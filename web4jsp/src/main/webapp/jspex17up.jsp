<%@ page import="pack.GuestbookDto" %>
<%@ page
        contentType="text/html;charset=UTF-8"
        pageEncoding="UTF-8"
%>
<%
    String code = request.getParameter("code");
%>

<jsp:useBean id="dbConnPooling" class="pack.DbConnPooling2"/>
<html>
<head>
    <title>Title</title>
</head>
<body>
<%
    GuestbookDto dto = dbConnPooling.updateDataRead(code);
    if(dto == null){
%>
<script type="text/javascript">
    alert("해당 방명록이 없습니다.");
    location.href = "jspex17dbcp.jsp"
</script>
<%
    }
%>
* 방명록 수정 *<br>
<form action="jspex17upSuccess.jsp" method="post">
    코드 : <%=dto.getCode()%>
    <input type="hidden" name="code" value="<%=dto.getCode()%>">
    <br>
    <label for="writer">작성자 :</label>
    <input type="text" name="writer" id="writer" value="<%=dto.getWriter()%>"><br>
    <label for="title">제목 :</label>
    <input type="text" name="title" id="title" value="<%=dto.getTitle()%>"><br>
    <label for="contents">내용 :</label>
    <textarea name="contents" id="contents"><%=dto.getContents()%></textarea><br>
    <input type="submit" value="자료 수정">
    <input type="button" value="수정 취소" onclick="location.href='jspex17dbcp.jsp'">
</form>
</body>
</html>