package com.webpage.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.webpage.service.LoginService;

@RestController
@CrossOrigin
public class LoginController {

	@Autowired
	private LoginService loginService;
	
	@GetMapping("/login/{username}/{password}")
	public boolean checkPasswordandUsername(@PathVariable String username, @PathVariable String password) {
		
		System.out.print(username+" "+ password);
		System.out.println(loginService.checkLoginAutondication(username, password));
		return loginService.checkLoginAutondication(username, password);
	}
}
