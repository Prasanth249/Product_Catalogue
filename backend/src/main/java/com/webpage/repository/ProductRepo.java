package com.webpage.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.webpage.entity.ProductDetails;

@Repository
public interface ProductRepo extends JpaRepository<ProductDetails, Integer> {
	
	List<ProductDetails> findByProductName(String productName);
	
}
