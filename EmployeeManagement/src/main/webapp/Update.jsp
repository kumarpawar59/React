<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

</head>
<body>
<form action="UpdateServlet" method="post" name="myform">
<fieldset>
<legend>Employee Data</legend>

<label>employee_Id :</label>
<input type="text" placeholder="Enter Id " name="eid"><br>

<label>employee_Name :</label>
<input type="text" placeholder="Enter Name " name="ename"><br>

<label>employee_salary :</label>
<input type="text" placeholder="Enter Salary " name="esalary"><br>

<label>employee_email :</label>
<input type="text" placeholder="Enter email " name="email"><br>


<input type="Submit" value="Update" onclick="return validate()">
</fieldset>



</form>
</body>
</html>