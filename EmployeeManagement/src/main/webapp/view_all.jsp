<%@page import="com.entity.Employee"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<style>
table, th, td {
	border: 3px solid black;
	margin: auto;
	border-collapse: collapse;
}
</style>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<table>
		<tr>
			<th>Id</th>
			<th>Name</th>
			<th>salary</th>
			<th>Email</th>
		</tr>


		<%
		List<Employee> lst = (List<Employee>) request.getAttribute("list");
		for (Employee e : lst) {
		%>
		<tr>
			<td><%=e.getId()%></td>
			<td><%=e.getName()%></td>
			<td><%=e.getSalary()%></td>
			<td><%=e.getEmail()%></td>
		</tr>

		<%
		}
		%>
	</table>
</body>
</html>