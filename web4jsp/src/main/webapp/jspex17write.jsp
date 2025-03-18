<%@ page
        contentType="text/html;charset=UTF-8"
        pageEncoding="UTF-8"
%>
<%
    request.setCharacterEncoding("utf-8");
%>
<jsp:useBean id="formBean" class="pack.GuestbookDto"/>
<jsp:setProperty name="formBean" property="*"/>
<jsp:useBean id="dbConnectPooling" class="pack.DbConnPooling2"/>

<%
    if(dbConnectPooling.insertData(formBean)){
        response.sendRedirect("jspex17dbcp.jsp");
    } else {
        response.sendRedirect("jspex17fail.html");
    }
%>