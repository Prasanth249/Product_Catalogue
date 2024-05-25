package com.webpage.service;

import java.util.List;

import com.webpage.entity.ProductDetails;

public interface ProductService {
	ProductDetails saveProduct(ProductDetails productDetails);
	List<ProductDetails> getProductByProductName(String productName);
}
