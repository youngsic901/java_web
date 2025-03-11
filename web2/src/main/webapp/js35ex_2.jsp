<%@page import="java.sql.*"%>

<%@ page language="java" contentType="text/plain; charset=UTF-8" pageEncoding="UTF-8"%>
{"gogek":
[
<%
    Connection conn = null;
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    String result = "";
    String sql = "SELECT gogekname, gogektel, case SUBSTR(gogekjumin, 8, 1)" +
      "when 1 then '남'" +
      "when 3 then '남'" +
      "when 2 then '여'" +
      "when 4 then '여'" +
      "END AS gogekgen FROM gogek;";
    String gen = request.getParameter("gender");
    try{
        Class.forName("org.mariadb.jdbc.Driver");
        conn = DriverManager.getConnection("jdbc:mariadb://localhost:3306/test", "root", "123");
    }catch(Exception e){
        System.out.println("연결 오류:" + e.getMessage());
        return;
    }

    try{
      pstmt = conn.prepareStatement(sql);
      rs = pstmt.executeQuery();
    }catch(Exception e){
        System.out.println("처리 오류:" + e.getMessage());
    }
%>
]
}