<%@ page import="java.util.ArrayList" %>
<%@ page import="pack.SangpumDto" %>
<%@ page
        contentType="text/html;charset=UTF-8"
        pageEncoding="UTF-8"
%>
<jsp:useBean id="dbConn" class="pack.DbConnClass" scope="page"/>
<%-- DbConnClass dbconn = new DbConnClsass(); 위의 서식과 같다 싱글톤 타입 객체 생성--%>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h2>상품정보(Beans 사용)</h2>
<table border="1">
  <tr>
    <th>코드</th><th>상품명</th><th>수량</th><th>단가</th>
  </tr>
  <%
    ArrayList<SangpumDto> list = dbConn.getDataAll();
    for(SangpumDto s:list){
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
