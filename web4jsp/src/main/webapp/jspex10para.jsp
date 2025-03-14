<%@ page
        contentType="text/html;charset=UTF-8"
        pageEncoding="UTF-8"
%>
<%
    // 우리가 알고 있는 기술 사용시 필요한 코드 Beans의 속성 tag사용시 필요하지 않음
    String message = request.getParameter("message");
%>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h3>* 클래스 멤버 필드에 값 설정하고 참조하기 *</h3>
<jsp:useBean id="myClass" class="pack.jspex10Para" scope="page" />
<%--
page : 현재 jsp 페이지에서만 유효
request : 다른 jsp 페이지에 전달 가능
session : session이 있는 사용자 입장으로 볼 때 모든 jsp 파일에서 사용 가능
application : 웹 프로젝트 내부의 모든 jsp에서 사용 가능
--%>
- 우리가 알고 있는 기술 사용 :
<%
    myClass.setMessage(message);
    out.println(myClass.getMessage());
%>
<hr>
- Beans의 속성 tag 사용 :
<jsp:useBean id="myClass2" class="pack.jspex10Para" scope="page" />
<jsp:setProperty name="myClass2" property="message"/>
<%-- 클라이언트의 ?message=good가 Jspex10Para의 setMessage()를 통해 message 필드에 값이 저장--%>
<jsp:getProperty name="myClass2" property="message"/>
<%-- property는 getter, setter메소드의 이름을 참조함--%>
</body>
</html>
