package com.dao;

import java.util.List;

import com.entity.Employee;

public interface Empdao {
	void Adddata(Employee emp);

	void deletedata(Employee emp);

	void updatedata(Employee emp);

	Employee getdata(int id);

	List<Employee> displayalldata();
}
