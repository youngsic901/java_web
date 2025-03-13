<%@ page
        contentType="text/html;charset=UTF-8"
        pageEncoding="UTF-8"
%>
<%  // 현재 jsp파일에서 세션을 삭제하고 로그인 화면으로 돌아간다. => 외부에 호출하는 부분이 없음
//    session.invalidate(); // 클라이언트가 가진 모든 세션 내의 키를 삭제
    session.removeAttribute("userid"); // 클라이언트가 가진 세션 내의 특정한 키를 삭제

    response.sendRedirect("jspex8login.html");
%>