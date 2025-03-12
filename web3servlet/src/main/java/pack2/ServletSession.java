package pack2;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/ServletSession")
public class ServletSession extends HttpServlet {
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // session : 클라이언트의 정보를 서버 컴퓨터의 확보한 메모리에 저장. 상태 유지가 목적
        HttpSession httpSession = request.getSession(true); // 세션이 있으면 읽고 없으면 세션을 생성
//      HttpSession httpSession = request.getSession(false); // 세션이 있으면 읽고 없으면 세션을 생성하지 않는다
        httpSession.setMaxInactiveInterval(10); // 10초 동안 세션 유효 (기본 값은 30분)

        if(httpSession != null){
            httpSession.setAttribute("myname", "신기해"); // key, value 형식
            httpSession.setAttribute("myaddr", "테헤란로 123");
        }

        response.setContentType("text/html;charset=utf-8");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("session id : " + httpSession.getId());
        out.println("<br>session 내부의 myname 키가 가진 값 : " + httpSession.getAttribute("myname"));
        out.println("<br>session 내부의 myaddr 키가 가진 값 : " + httpSession.getAttribute("myaddr"));
        out.println("</body></html>");
        out.close();
    }
}
