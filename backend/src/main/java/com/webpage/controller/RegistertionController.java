package com.webpage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.webpage.entity.Country;
import com.webpage.entity.RegistertionTable;
import com.webpage.entity.State;
import com.webpage.service.RegisterService;


@CrossOrigin("http://localhost:3000/")
@RestController
public class RegistertionController {

	@Autowired
	private RegisterService registerService;
	
	
//	@PostMapping("/addcustomer")
//	public RegistertionTable saveCustomer(@RequestBody RegistertionTable registertionTable) {
//		
//		return registerService.saveCustomer(registertionTable);
//	}
	  @PostMapping("/addcustomer")
	    public ResponseEntity<?> saveCustomer(@RequestBody RegistertionTable registertionTable) {
	        try {
	        	System.out.println(registertionTable);
	            RegistertionTable savedCustomer = registerService.saveCustomer(registertionTable);
	            return ResponseEntity.ok(savedCustomer);
	        } catch (Exception e) {
	            e.printStackTrace();  // Log the exception for debugging
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Internal Server Error");
	        }
	    }

	@GetMapping("/countrys")
	public List<Country> getAllCountrys(){
		return registerService.getAllCountrys();
	}
	
	@GetMapping("/state/{countryName}")
	public List<State> getStateByCountry(@PathVariable String countryName){
		return registerService.getStateByCountry(countryName);
	}
}
