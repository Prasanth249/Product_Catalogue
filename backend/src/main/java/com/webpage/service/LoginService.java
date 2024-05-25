package com.webpage.service;

import org.springframework.stereotype.Service;

@Service
public interface LoginService {

	public boolean checkLoginAutondication(String user_name, String password);
}
