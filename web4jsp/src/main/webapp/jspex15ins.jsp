<%@ page
        contentType="text/html;charset=UTF-8"
        pageEncoding="UTF-8"
%>
<%
    request.setCharacterEncoding("utf-8");
%>
<jsp:useBean id="dbConnPaging" class="pack.DbConnPaging"/>

<jsp:useBean id="formBean" class="pack.SangpumFormBean"/>
<jsp:setProperty name="formBean" property="*"/>

<%-- 자바에서도 입력자료 검사 권장 --%>
<%
    if(formBean.getSang() == null){
        response.sendRedirect("jspex15insert.html");
        return;
    } else if(formBean.getSu() == null){
        response.sendRedirect("jspex15insert.html");
        return;
    } else if(formBean.getDan() == null){
        response.sendRedirect("jspex15insert.html");
        return;
    }

    dbConnPaging.sangpumInsert(formBean);

    // 상품 추가 후 목록보기로 이동 forward 하면 안됨 => 새로고침 시 중복되는 데이터가 계속해서 DB에 업데이트 됨
    // request.getRequestDispatcher("jspex15paging.jsp").forward(request, response);

    response.sendRedirect("jspex15paging.jsp");
%>
<html>
<head>
    <title>Title</title>
</head>
<body>

</body>
</html>
