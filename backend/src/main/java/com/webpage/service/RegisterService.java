package com.webpage.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.webpage.entity.Country;
import com.webpage.entity.RegistertionTable;
import com.webpage.entity.State;

@Service
public interface RegisterService {
	
	public RegistertionTable saveCustomer(RegistertionTable registertionTable);
	public List<Country> getAllCountrys();
	public Country getCountry(String country);
	public List<State> getStateByCountry(String country_code);
}
