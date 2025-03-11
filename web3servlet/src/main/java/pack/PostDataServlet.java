package pack;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/PostDataServlet")
public class PostDataServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // post 요청 처리 전용 메소드

        String irum = request.getParameter("name");
        System.out.println(irum);

        String[] juso = request.getParameterValues("addr");

        // 클라이언트로 전송할 코드 작성
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("<html lang=\"ko\"><body>");
        out.println("<h3>서버가 전송한 자료 확인(post)</h3>");
        out.println("이름은 " + irum);
        out.println("<br>주소는 " + juso[0] + ":" + juso[1]);

        //checkbox
        try{
            String[] lan = request.getParameterValues("lan");
            out.println("<br>선택한 언어는 ");
            for(String ss:lan){
                out.println(ss + " ");
            }
        } catch (Exception e){
            out.println("한 개 이상의 언어를 고르세요");
            return;
        }

        // radio
        out.println("<br>운영체제는 " + request.getParameter("os"));

        out.println("<br><br><a href='postdata.html'>자료 다시 입력</a>");
        out.println("</body></html>");
    }


}
