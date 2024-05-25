package com.webpage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webpage.entity.Country;

public interface CountryRepo extends JpaRepository<Country, Integer> {

	Country findByCountryName(String countryName);
	
}
