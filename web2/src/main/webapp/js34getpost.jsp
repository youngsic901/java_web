<%@ page contentType="text/html; charset=UTF-8" language="java" pageEncoding="utf-8" %>
<%
    String irum = request.getParameter("irum");
    String nai = request.getParameter("nai");

    System.out.println(irum + "님의 나이는 " + nai);
    out.print(irum + "님의 나이는 " + nai);
%>