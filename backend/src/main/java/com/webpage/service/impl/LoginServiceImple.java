package com.webpage.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webpage.entity.RegistertionTable;
import com.webpage.repository.LoginRepo;
import com.webpage.service.LoginService;

@Service
public class LoginServiceImple implements LoginService{
	
	@Autowired
	private LoginRepo loginRepo;

	@Override
	public boolean checkLoginAutondication(String user_name, String password) {
		 
		
		List<RegistertionTable> userLoginStatus =  loginRepo.findBycustomerNameAndPassword(user_name, password);
		
		if(userLoginStatus.isEmpty()) {
			return false;
		}else {
			return true;
		}
	}

	
}
