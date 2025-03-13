<%@ page
        contentType="text/html; charset=UTF-8"
        isErrorPage="true"
%>
<html>
  <head>
    <title>Title</title>
  </head>
  <body>
  <h2>에러 발생</h2><%= exception.getMessage()%>
  </body>
</html>
