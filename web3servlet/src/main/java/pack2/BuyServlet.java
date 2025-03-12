package pack2;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.Serial;
import java.util.ArrayList;

@WebServlet("/BuyServlet")
public class BuyServlet extends HttpServlet {
    @Serial
    private static final long serialVersionUID = 2L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession httpSession = request.getSession(false);
        if (httpSession == null){return;}

        ArrayList<Goods> glist = (ArrayList<Goods>) httpSession.getAttribute("list");
        if(glist == null){return;}

        response.setContentType("text/html;charset=utf-8");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<table width='80%' border='1'>");
        out.println("<tr><th>상품명</th><th>가격</th></tr>");

        int totPrice = 0;
        // 컬렉션에 저장된 상품자료(DTO) 한 개씩 꺼내서 출력
        for (Goods goods : glist) {
            out.println("<tr>");
            out.println("<td>" + goods.getName() + "</td>");
            out.println("<td>" + goods.getPrice() + "</td>");
            out.println("</tr>");
            totPrice += goods.getPrice(); // 가격을 누적
        }
        out.println("<tr><td colspan='2'>결제 총액 : " + totPrice + "</td></tr>");
        out.println("</table>");
        out.println("<br>결제가 완료 되었습니다.");
        out.println("<br><a href='shopping/shop.html'>쇼핑하러 돌아가기</a>");
        out.println("</body></html>");

        // 결제가 끝났으므로 세션 초기화하기
//        httpSession.invalidate(); // 해당 고객의 세션 내부 모든 키 삭제
        httpSession.removeAttribute("list"); // 해당 고객의 세션 내 특정 키 하나만 삭제
    }
}
