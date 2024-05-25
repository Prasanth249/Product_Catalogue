package com.webpage.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webpage.entity.Country;
import com.webpage.entity.RegistertionTable;
import com.webpage.entity.State;
import com.webpage.repository.CountryRepo;
import com.webpage.repository.RegistertionRepo;
import com.webpage.repository.StateRepo;
import com.webpage.service.RegisterService;

@Service
public class RegistertionServiceImple implements RegisterService {
	
	@Autowired
	private RegistertionRepo registertionRepo;
	
	@Autowired
	private CountryRepo countryRepo;
	
	@Autowired
	private StateRepo stateRepo;

	@Override
	public RegistertionTable saveCustomer(RegistertionTable registertionTable) {
			return registertionRepo.save(registertionTable);
	}

	@Override
	public List<Country> getAllCountrys() {
		return countryRepo.findAll();
	}

	@Override
	public List<State> getStateByCountry(String country_code) {
		return stateRepo.findBycountryName(country_code);
	}

	@Override
	public Country getCountry(String country) {
		return countryRepo.findByCountryName(country);
	}
	
	

	
}
