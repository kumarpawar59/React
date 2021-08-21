<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript">
  function validate() {
	  
	  var name=document.myform.eid.value;
	  var fname=document.myform.ename.value;
	  var sal=document.myform.esalary.value;
	  var mail=document.myform.email.value;
	  if(name==null || name==""){
			alert("enter the valid Id");
			document.myform.eid.focus();
			return false;
		}
		
	  if(fname==null || fname==""){
		  alert("please enter the name");
			document.myform.eid.focus();
			return false;
		  
	  }
		
	  if(sal==null || sal==""){
		  alert("please enter the sal");
			document.myform.eid.focus();
			return false;
		  
	  }
		
	  if(mail==null || mail==""){
		  alert("please enter the mail");
			document.myform.eid.focus();
			return false;
		  
	  }
	  
}



</script>

</head>
<body>
<form action="InsertServlet" method="post" onsubmit="return validate()" name="myform">
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


<input type="Submit" value="submit" >
</fieldset>



</form>
</body>
</html>