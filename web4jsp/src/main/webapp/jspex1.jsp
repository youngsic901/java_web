<%@ page import="java.util.Date" %>
<%@ page
        language="java"
        contentType="text/html; charset=UTF-8"
        pageEncoding="UTF-8"
%>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<%--
JSP Element의 종류
1) 지시어 : <%@ 지시어명 %>
2) 선언 : <%! %> 전역변수 및 메소드 선언
3) 식(표현) : <%= %> 클라이언트 값 전송
4) 스크립트릿(scriptlet) <% %> 자바 코드 작성
5) 액션태그 : <jsp: ~ />
--%>
<h2>JSP 문서 기본 이해</h2>
<%
//    자바 코드 작성 영역
    String irum = "한국인";
    out.println(irum + "의 홈페이지입니다"); // 내장객체 out으로 브라우저에 메세지 출력

    for(int i = 1; i < 7; i++){
        out.println("<h" + i + ">");
        out.print("jsp 테스트");
        out.println("</h" + i + ">");
    }
%>

여기는 html<br>
<%
    Date date = new Date();
    out.println(date);
%>
<i><%= date %></i><%-- 표현식은 출력 내용 한 개만 적는다. 뒤에 ; 주지 않음  --%>
<%= new Date()%>
<br>여기는 html<br>
<%
    int a=0,sum=0;
    do {
        a++;
        sum+=a;
    }while (a < 10);
%>
<%= "10까지의 합은 " + sum%>

<%
    String tel = "111-1111";
%>
<br>
<%= irum + "님의 전화번호는 " + tel%>
<%!     // 선언 : 전역변수가 됨. 이외의 변수 선언은 지역변수!
        // jsp는 HttpServlet을 상속받은 클래스이며, 오버라이딩 된 service 메소드 내에 코드를 작성한 문서 ==> 그래서 Servlet을 먼저 이해할 필요가 있다.
        // 즉 jsp는 get과 post방식 두 가지 방식으로 데이터를 받는게 가능하다.
    String tel = "111-1111";
%>
<%-- 즉 <%! %> 내부에서 선언된 변수는 service 메소드 내부의 지역변수가 아니라 클래스의 멤버필드 이다. --%>
<br>
<%--<%
    public int addMethod(int m, int n){
        return m+n;
    }
%>--%><%-- method 내부에서 다시 method를 선언할 수 없으므로 error--%>
<%!
    public int addMethod(int m, int n){
        return m+n;
    }
%><%-- 다음과 같이 <%! %> 내부에서 선언해야 클래스의 메소드로 취급받는다.--%>
</body>
</html>
