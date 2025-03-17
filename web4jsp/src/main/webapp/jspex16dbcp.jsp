<%@ page import="pack.SangpumDto" %>
<%@ page import="java.util.ArrayList" %>
<%@ page
        contentType="text/html;charset=UTF-8"
        pageEncoding="UTF-8"
%>
<jsp:useBean id="dbConnPooling" class="pack.DbConnPooling"/>
<html>
<head>
    <title>Title</title>
    <script src="./js/jspex16dbcp.js"></script>
</head>
<body>
<h2>상품 정보(Beans - DBCP)</h2>
<a href="jspex16ins.html">추가</a>&nbsp;&nbsp;
<a href="javascript:funcUpdate()">수정</a>&nbsp;&nbsp;
<a href="javascript:funcDelete()">삭제</a>
<br><br>
<table border="1">
    <tr>
    <th>코드</th><th>품명</th><th>수량</th><th>단가</th>
    </tr>
    <%
        ArrayList<SangpumDto> slist = dbConnPooling.getDataAll();
        for(SangpumDto s:slist){
    %>
        <tr>
            <td><%=s.getCode()%></td>
            <td><%=s.getSang()%></td>
            <td><%=s.getSu()%></td>
            <td><%=s.getDan()%></td>
        </tr>
    <%
        }
    %>
</table>
</body>
</html>
