<%@ page
        contentType="text/html;charset=UTF-8"
        pageEncoding="UTF-8"
%>
<%
    // 이 파일은 내부적으로 비즈니스 로직 운영을 목적으로 한다. ==> 출력은 하지 않는다.
    String id = request.getParameter("id");
    String pwd = request.getParameter("pwd");

    // 자격 증명 확인 작업 필요(예를 들어 DB자료 를 읽어서 대조
    String validId = "ok";
    String validPassword = "123";
    // 편의상 직접 자료를 적음****************************************************

    if(id != null && pwd != null && id.equals(validId) && pwd.equals(validPassword)){
        // 자격이 유효한 경우. 인증(Authentication)됨
//        HttpSession session = request.getSession(); // 이미 내장객체로 지원되므로 적지 않음
        session.setAttribute("userid", id);
        response.sendRedirect("jspex8success.jsp");
    } else {
        // 로그인 정보가 틀린 경우
        out.println("<html><head><meta charset='UTF-8'></head><body>");
        out.println("<h3>로그인 실패</h3>");
        out.println("<a href='jspex8login.html'>다시 로그인</a>");
        out.println("</body></html>");
    }

%>