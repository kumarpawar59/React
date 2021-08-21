package com.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.dao.Empdao;
import com.dao.Empdaoimpl;
import com.entity.Employee;


public class GetServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
   
    public GetServlet() {
        super();
       
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int id=Integer.parseInt(request.getParameter("eid"));
		
		
		Empdao em= new Empdaoimpl();
		Employee emp=em.getdata(id);
		request.setAttribute("data", emp);
		
		RequestDispatcher rd=request.getRequestDispatcher("view1.jsp");
		rd.forward(request, response);
		
	
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
