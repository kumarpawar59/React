package com.helper;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class SessionUtils {
	private static SessionFactory sessionFactory;
   public static SessionFactory getFactory() {
	    if(sessionFactory==null || sessionFactory.isClosed()) {
	      sessionFactory =new Configuration().configure().buildSessionFactory();
	    }
	return sessionFactory;   
   }
   public void closeFactory() {
	   if(sessionFactory!=null || sessionFactory.isOpen()) {
		   sessionFactory.close();
	   }
   }
	
//	private static SessionFactory sessionFactory;
//	public static SessionFactory getFactory() {
//		if(sessionFactory==null || sessionFactory.isClosed()) {
//			sessionFactory=new Configuration().configure().buildSessionFactory();
//		}
//		return sessionFactory;
//	}
//	
//	public void closeFactory() {
//		if(sessionFactory!=null || sessionFactory.isOpen()) {
//			sessionFactory.close();
//		}
//	}
}

