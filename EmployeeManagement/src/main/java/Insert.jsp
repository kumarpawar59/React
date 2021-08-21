<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>


<script type="text/javascript">
   function validate() {
	
	   
	   var id=document.myform.sid.value;
		 var name=document.myform.sname.value;
		 var add=document.myform.sadd.value;
		 
		 if(id==null || id==""){
			 alert("must be enter Student Id")
			 document.myform.sid.focus();
			 return false;
		 }
		 else if(id.length<3){
			 alert("char must be greater than 3 char std id")
			 document.myform.sid.focus();
			 return false;
			 
		 }
	    
	    if(name==null || name==""){
			 alert("must be enter Student name")
			 document.myform.sname.focus();
			 return false;
		 }
	    else if(name.length<3){
			 alert("char must be greater than 3 char sts name")
			 document.myform.sname.focus();
			 return false;
			 
		 }
	    if(add==null || add==""){
			 alert("must be enter Student address")
			 document.myform.sadd.focus();
			 return false;
		 }
	    else if(add.length<3){
			 alert("char must be greater than 3 char std add")
			 document.myform.sadd.focus();
			 return false;
			 
		 }
}






</script>
</head>

<body>
<h2>Add data</h2>
<form action="AddServlet" method="post" name="myform" onsubmit="return validate()">

<label>Student Id :</label>
<input type="number" placeholder="Enter Student Id" name="sid"><br>
<label>Student name :</label>
<input type="text" placeholder="Enter Student name" name="sname"><br>
<label>Student address :</label>
<input type="text" placeholder="Enter Student address" name="sadd"><br>
<input type="Submit" value="submit">

</form>
</body>
</html>