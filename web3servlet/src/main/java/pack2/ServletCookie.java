package pack2;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@WebServlet("/ServletCookie")
public class ServletCookie extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=utf-8");
        PrintWriter out = response.getWriter(); // singleton
        out.println("<html><body>");
        // 특정 클라이언트의 쿠키를 읽어 로그인 화면 출력 여부 결정

        // 쿠키가 이미 있다면(로그인 한 상태라면) 로그인 화면 대신 다른 작업을 표시한다.
        // 웹서버는 클라이언트의 요청이 있는 경우 클라이언트에 저장된 모든 쿠키를 읽어 자신이 만든 쿠키를 찾음
        String id = null;
        String pwd = null;
        try{
            Cookie[] cookies = request.getCookies();
            for(int i = 0; i<cookies.length; i++){
                String name = cookies[i].getName();
                System.out.println("name : " + name);

                if(name.equals("id")){
                    id = URLDecoder.decode(cookies[i].getValue(), StandardCharsets.UTF_8);
                }
                if(name.equals("pwd")){
                    pwd = URLDecoder.decode(cookies[i].getValue(), StandardCharsets.UTF_8);
                }
            }
        } catch (Exception e) {
            e.getStackTrace();
        }

        if(id != null && pwd != null){
            out.print(id + "님 쿠키를 통해 로그인한 상태임을 확인했습니다.");
            out.println("</body></html>");
            out.close();
            return;
        }

        // 쿠키가 없는 경우에만 로그인 화면 출력
        out.println("* 로그인 *");
        out.println("<form method='post'>"); // action이 없으면 현재 서블릿을 다시 호출
        out.println("i d : <input type='text' name='id'><br>");
        out.println("pwd : <input type='text' name='pwd'><br>");
        out.println("<input type='submit' value='로그인'>");
        out.println("</form>");
        out.println("</body></html>");
        out.close();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("utf-8");

        response.setContentType("text/html;charset=utf-8");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");

        String id = request.getParameter("id");
        String pwd = request.getParameter("pwd");
//        System.out.println(id + " " + pwd);
        if(id.equals("aa") && pwd.equals("11")){
            out.println("로그인 성공 : 쿠키 생성");
            try { // 네트워크 작업이라면 try-catch문 사용
                // 로그인에 성공(인증)한 경우 클라이언트 컴퓨터에 쿠키를 저장
                id = URLEncoder.encode(id, "utf-8"); // 암호화 : 쿠키와 같이 한글을 표현하지 못하는 경우 한글을 ASCII 값으로 인코딩
                Cookie idCookie = new Cookie("id", id); // 키, 값 형식으로 작성
                idCookie.setMaxAge(60 * 60 * 24 * 365); // 쿠키의 유효기간 ==> 60초 * 60분 * 24시간 * 365일 => 1년
                
                pwd = URLEncoder.encode(pwd, "utf-8");
                Cookie pwdCookie = new Cookie("pwd", pwd);
                pwdCookie.setMaxAge(60 * 60 * 24 * 365);
                
                response.addCookie(idCookie); // 클라이언트 컴퓨터에 쿠키를 저장
                response.addCookie(pwdCookie);
            } catch (Exception e) {
                out.println("error" + e.getMessage());
            }
        } else {
            out.println("로그인 실패");
        }

        out.println("</body></html>");
        out.close();
    }
}
