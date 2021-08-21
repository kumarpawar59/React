package com.servlet;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dao.Empdao;
import com.dao.Empdaoimpl;
import com.entity.Employee;

public class display_all extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public display_all() {
        super();
        
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Empdao em= new Empdaoimpl();
		      List<Employee>list=em.displayalldata(); 
		      request.setAttribute("list", list);
		      RequestDispatcher rd=request.getRequestDispatcher("view_all.jsp");
		      
		     rd.forward(request, response);
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}

}
