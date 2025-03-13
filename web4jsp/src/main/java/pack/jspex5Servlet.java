package pack;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.Serial;

@WebServlet("/irum.go")
public class jspex5Servlet extends HttpServlet {
    @Serial
    private static final long serialVersionUID = 1L;

    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        String data = request.getParameter("data");
        System.out.println("data: " + data);
        // 넘어온 자료로 작업중(출력, DB 처리 등등...)


        // jsp 또는 servlet 파일 호출하기 1 : redirect - client를 통해 파일 호출
//        response.sendRedirect("jspex5jsp.jsp?mydata=" + data);

        // jsp 또는 servlet 파일 호출하기 2 : forward - server에서 바로 파일 호출
        request.setAttribute("mydata", data);   // forward 방식에서 파일 호출시 값을 주려면 request를 이용
//        request.setAttribute("키", 값); // 값은 자바의 모든 객체가 가능
        RequestDispatcher dispatcher = request.getRequestDispatcher("jspex5jsp.jsp");
        dispatcher.forward(request, response);
    }
}
