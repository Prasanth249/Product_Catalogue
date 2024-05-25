package com.webpage.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.webpage.entity.ProductDetails;
import com.webpage.repository.ProductRepo;
import com.webpage.service.ProductService;

@Service
public class ProductServiceImple implements ProductService{

	@Autowired
	private ProductRepo productRepo;
	
	@Override
	public ProductDetails saveProduct(ProductDetails productDetails) {
	
		return productRepo.save(productDetails);
	}

	@Override
	public List<ProductDetails> getProductByProductName(String productName) {
		
		return productRepo.findByProductName(productName);
	}

	
}
