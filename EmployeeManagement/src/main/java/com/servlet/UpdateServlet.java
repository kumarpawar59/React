package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dao.Empdao;
import com.dao.Empdaoimpl;
import com.entity.Employee;

public class UpdateServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
  
    public UpdateServlet() {
        super();
      
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String eid=request.getParameter("eid");
		int id=Integer.parseInt(eid);
		String name=request.getParameter("ename");
		String sal=request.getParameter("esalary");
		int salary=Integer.parseInt(sal);
		String email_id=request.getParameter("email");
		
		Employee emp=new Employee(id,name,salary,email_id);
		emp.setId(id);
		emp.setName(name);
		emp.setSalary(salary);
		emp.setEmail(email_id);
		Empdao em=(Empdao) new Empdaoimpl();
		em.updatedata(emp);
		response.sendRedirect("index.jsp");
		
	
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}

}
