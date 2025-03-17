<%@ page
        contentType="text/html;charset=UTF-8"
        pageEncoding="UTF-8"
%>
<%
    // insert 후 목록보기로 이동
    request.setCharacterEncoding("utf-8");
%>

<jsp:useBean id="formBean" class="pack.SangpumFormBean"/>
<jsp:setProperty name="formBean" property="*"/>
<jsp:useBean id="dbConnPooling" class="pack.DbConnPooling"/>

<%
    boolean b = dbConnPooling.insertData(formBean);

    if(b){
        response.sendRedirect("jspex16dbcp.jsp");
    } else {
        response.sendRedirect("jspex16fail.html");
    }
%>