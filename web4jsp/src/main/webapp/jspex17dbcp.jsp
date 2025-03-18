<%@ page import="java.util.ArrayList" %>
<%@ page import="pack.GuestbookDto" %>
<%@ page
        contentType="text/html;charset=UTF-8"
        pageEncoding="UTF-8"
%>
<jsp:useBean id="dbConnPooling" class="pack.DbConnPooling2"/>
<html>
<head>
    <title>Title</title>
    <script src="./js/jspex17dbcp.js"></script>
</head>
<body>
<h2>* 방명록 내용 *</h2>
<a href="jspex17write.html">글쓰기</a><br>
<table border="1">
    <tr>
        <th>코드</th><th>작성자</th><th>제목</th><th>내용</th>
    </tr>
    <%
        ArrayList<GuestbookDto> glist = dbConnPooling.getDataAll();
        for(GuestbookDto g: glist){
    %>
    <tr>
        <td><a href="javascript:funcDelete(<%=g.getCode()%>)"><%=g.getCode()%></a></td>
        <td><a href="javascript:funcUpdate(<%=g.getCode()%>)"><%=g.getWriter()%></a></td>
        <td><%=g.getTitle()%></td>
        <td><%=g.getContents()%></td>
    </tr>
    <%
        }
    %>
</table>

</body>
</html>
