package com.webpage.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class State {

	@Id
	private int stateId;
	private String stateName;
	private String countryName;
	
	
	public int getId() {
		return stateId;
	}
	public void setId(int stateId) {
		this.stateId = stateId;
	}
	public String getStateNme() {
		return stateName;
	}
	public void setStateName(String stateName) {
		this.stateName = stateName;
	}
	public String getcountryName() {
		return countryName;
	}
	public void setcountryName(String stateCode) {
		this.countryName = stateCode;
	}
	
}
