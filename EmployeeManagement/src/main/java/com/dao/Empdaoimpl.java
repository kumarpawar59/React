package com.dao;
import java.util.List;


import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;

import com.entity.Employee;
import com.helper.SessionUtils;

public class Empdaoimpl implements Empdao {

	public void Adddata(Employee emp){
		Session session =new SessionUtils().getFactory().openSession();
		Transaction transaction=session.beginTransaction();
		session.save(emp);
		transaction.commit();
		session.close();
		
	}

	public void deletedata(Employee emp) {
		Session session =new SessionUtils().getFactory().openSession();
		Transaction transaction=session.beginTransaction();
	    Employee em=new Employee();
		session.delete(emp);
		transaction.commit();
		session.close();
	}

	public void updatedata(Employee emp) {
		Session session =new SessionUtils().getFactory().openSession();
		Transaction transaction=session.beginTransaction();
	    Employee em=new Employee();
		session.update(emp);
		transaction.commit();
		session.close();
		
	}

	public Employee getdata(int id) {
		Session session =new SessionUtils().getFactory().openSession();
		Employee emp=session.get(Employee.class, id);
		session.close();
		return emp;
	}

	public List<Employee> displayalldata() {
		Session session=new SessionUtils().getFactory().openSession();
		Query q=session.createQuery("from Employee");
		List<Employee> list=q.list();
		session.close();
		return list;

	}

}
