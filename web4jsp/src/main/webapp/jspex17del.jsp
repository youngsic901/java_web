<%@ page
        contentType="text/html;charset=UTF-8"
        pageEncoding="UTF-8"
%>
<%
    String code = request.getParameter("code");
%>
<jsp:useBean id="dbConnPooling" class="pack.DbConnPooling2"/>

<%
    if(dbConnPooling.deleteData(code)){
        response.sendRedirect("jspex17dbcp.jsp");
    } else {
        response.sendRedirect("jspex17fail.jsp");
    }
%>