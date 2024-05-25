package com.webpage.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class RegistertionTable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int customer_id;
	private int pincode;
	private String customerName;
	private String gmail;
	private String address;
	private String password;
//	@ManyToOne(targetEntity = Country.class, cascade = CascadeType.ALL)
//	@JoinColumn(name = "country_id") // Assuming "country_id" is the foreign key column in RegistertionTable
//	private Country country;
	    
	private String country;
	private String states;
//	@OneToMany(targetEntity = State.class, cascade = CascadeType.ALL)
//	@JoinColumn(name = "customer_id") // Assuming "customer_id" is the foreign key column in State
//	private List<State> states;
	private boolean active_terms;
	
	public String getPassword() {
		return password;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getStates() {
		return states;
	}
	public void setStates(String states) {
		this.states = states;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	public int getCustomer_id() {
		return customer_id;
	}
	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
	}
	public String getcustomerName() {
		return customerName;
	}
	public void setcustomerName(String customer_name) {
		this.customerName = customer_name;
	}
	public String getGmail() {
		return gmail;
	}
	public void setGmail(String gmail) {
		this.gmail = gmail;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public boolean isActive_terms() {
		return active_terms;
	}
	public void setActive_terms(boolean active_terms) {
		this.active_terms = active_terms;
	}
	
	@Override
	public String toString() {
		return "RegistertionTable [customer_id=" + customer_id + ", pincode=" + pincode + ", customer_name="
				+ customerName + ", gmail=" + gmail + ", address=" + address + ", password=" + password + ", country="
				+ country + ", states=" + states + ", active_terms=" + active_terms + "]";
	}	
	
	
}
