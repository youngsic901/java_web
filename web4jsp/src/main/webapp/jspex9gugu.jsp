<%@ page import="pack.Jspex9Gugu" %>
<%@ page
        contentType="text/html;charset=UTF-8"
        pageEncoding="UTF-8"
%>
<html>
<head>
    <title>Title</title>
</head>
<body>
<b>* 현재 내 능력(skill)으로 할 수 있는 방법 *</b>
<%
  int dan = Integer.parseInt(request.getParameter("dan"));
  out.println(dan + "단 출력<br>");

//  Jspex9Gugu gugu = new Jspex9Gugu(); // 클래스의 포함 관계
  // 페이지가 계속 호출될 때마다 객체가 만들어짐 => 메모리 낭비 => singleton으로 작성
  Jspex9Gugu gugu = Jspex9Gugu.getInstance(); // 클래스의 포함 관계 : 싱글톤 패턴 사용

  int[] result = gugu.computeGugu(dan);
  for(int a = 0; a <result.length; a++){
    out.println(dan + "*" + (a + 1) + "=" + result[a] + "&nbsp;&nbsp;");
  }
%>
<hr>
<b>* beans를 사용 *</b>
<br>
<jsp:useBean id="gugu2" class="pack.Jspex9Gugu" /><%-- gugu2 라는 이름의 singleton 객체 생성됨--%>
<%
  int[] result2 = gugu.computeGugu(dan);
  for(int a = 0; a <result2.length; a++){
    out.println(dan + "*" + (a + 1) + "=" + result2[a] + "&nbsp;&nbsp;");
  }
%>
</body>
</html>
