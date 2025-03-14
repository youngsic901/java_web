<%@ page import="java.util.ArrayList" %>
<%@ page import="pack.JikwonDto" %>
<%@ page
        contentType="text/html;charset=UTF-8"
        pageEncoding="UTF-8"
%>
<jsp:useBean id="dbConnect" class="pack.Jspex14DbConnect" />

<html>
<head>
    <title>Title</title>
</head>
<body>
<%
    String busername = request.getParameter("busername");
%>
<h2><%=busername%></h2>
<table border="1">
    <tr>
        <th>사번</th><th>직원명</th><th>직급</th><th>성별</th>
    </tr>
    <%!
        int count = 0;
        int maxPay = 0;
        int minPay = 0;
    %>
    <%
        ArrayList<JikwonDto> list = dbConnect.getJikwon(busername);
        for(JikwonDto s: list){
            if(s.getJikwonpay() < minPay || minPay == 0){
                minPay = s.getJikwonpay();
            }
            if(s.getJikwonpay() > maxPay){
                maxPay = s.getJikwonpay();
            }
    %>
    <tr>
        <td><%=s.getJikwonno()%></td>
        <td><%=s.getJikwonname()%></td>
        <td><%=s.getJikwonjik()%></td>
        <td><%=s.getJikwongen()%></td>
    </tr>
    <%
            count++;
        }
    %>
</table>
인원 수 : <%=count%>명<br>
최고연봉 : <%=maxPay%>&nbsp;&nbsp;&nbsp;최저연봉:<%=minPay%>
<% count = 0; maxPay = 0; minPay = 0;%>
</body>
</html>
