<%@page import="com.entity.Employee"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
Employee emp=(Employee)request.getAttribute("data"); 
out.println("Emp Id : "+emp.getId());
out.println("Emp name : "+emp.getName());
out.println("Emp salary : "+emp.getSalary());
out.println("Emp email :"+emp.getEmail());


%>
</body>
</html>