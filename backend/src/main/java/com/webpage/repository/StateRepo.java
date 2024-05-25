package com.webpage.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.webpage.entity.State;

public interface StateRepo extends JpaRepository<State, Integer> {
	
	public List<State> findBycountryName(String state_code);
}
