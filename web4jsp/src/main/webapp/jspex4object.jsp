<%@ page
        contentType="text/html;charset=UTF-8"
        pageEncoding="UTF-8"
%>
<html>
<head>
    <title>Title</title>
</head>
<body>
<h2>* 9개의 내장객체 *</h2>
<pre>
    1. request : javax.servlet.ServletRequest(javax.servlet.http.httpRequest) - client의 http 요청정보를 저장하고 있는 객체
    2. response : javax.servlet.ServletResponse(javax.servlet.http.httpResponse) - http 요청에 대한 응답정보를 저장하는 객체
    3. session : javax.servlet.http.HttpSession - client 가 서버에 접속했을 때 세션정보를 저장한 객체
    4. pageContext : javax.servlet.jsp.PageContext - 응답 페이지 실행에 필요한 Context 정보를 저장한 객체
    5. out : javax.servlet.jsp.JspWriter - 응답 페이지 전송을 위한 출력 stream
    6. application : javax.servlet.ServletContext - 동일한 Application 의 Context 정보를 저장하고 있는 객체
    7. config -- 설정에 관련 : javax.servlet.ServletConfig - 특정 페이지의 서블릿 설정 정볼르 저장하고 있는 객체
    8. page : java.lang.Object - 특정 페이지의 서블릿 객체(인스턴스화된 객체)
    9. exception : java.lang.Throwable - 예외 처리를 위한 객체
</pre>
<br>
* 회원 가입 *<br>
<form action="jspex4etc.jsp" method="post" name="frmMem">
    <label for="id">아 이 디 : </label>
    <input type="text" name="id" id="id"><br>
    <label for="pwd">비밀번호 : </label>
    <input type="password" name="pwd" id="pwd"><br>
    <input type="submit" value="전송">
</form>
</body>
</html>
