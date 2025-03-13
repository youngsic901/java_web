<%@ page import="java.util.ArrayList" %>
<%@ page
        contentType="text/html;charset=UTF-8"
        pageEncoding="UTF-8"
%>

<%
    String data = request.getParameter("data");
    String msg = "Mr. " + data;
//    System.out.println(data);

    // redirect 방식으로 다른 jsp 파일 호출
//    response.sendRedirect("jspex6jsp2.jsp?mydata=" + msg);

    // forward 방식으로 다른 jsp 파일 호출
    request.setAttribute("mydata", msg);
    ArrayList<String> list = new ArrayList<String>();
    list.add("홍길동");
    list.add("고길동");
    list.add("신길동");
    request.setAttribute("listdata", list); // jsp 파일 호출시 전송자료 하나 더

    // 해당 코드는 jsp버전으로 작성했을 때 더 간단하게 구현이 가능함 ==> jsp action tag 사용
//    RequestDispatcher dispatcher = request.getRequestDispatcher("jspex6jsp2.jsp");
//    dispatcher.forward(request, response);


%>
<jsp:forward page="jspex6jsp2.jsp"/>