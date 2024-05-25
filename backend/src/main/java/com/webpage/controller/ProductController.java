package com.webpage.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;

import com.webpage.entity.ProductDetails;
import com.webpage.service.ProductService;

@Configuration
@RestController
@CrossOrigin("http://localhost:3000")
public class ProductController {

	@Autowired
	private ProductService productService;
	
	 @Bean
	     MultipartResolver multipartResolver() {
	        return new StandardServletMultipartResolver();
	    }
	
//	@PostMapping("/saveProduct")
//	public ProductDetails saveProduct(@RequestBody ProductDetails productDetails) {
//		System.out.println(productDetails);
//		return productService.saveProduct(productDetails);
//	}
	@PostMapping("/saveProduct")
	public ProductDetails saveProduct(
	        @RequestParam("productName") String productName,
	        @RequestParam("productDescription") String productDescription,
	        @RequestParam("productPrice") float productPrice,
	        @RequestParam("productSKU") int productSKU,
	        @RequestParam("productAvailability") String productAvailability,
	        @RequestParam("productDiscount") float productDiscount,
	        @RequestParam("productImage") MultipartFile productImage) throws IOException {

	    ProductDetails productDetails = new ProductDetails();
	    productDetails.setProductName(productName);
	    productDetails.setProductDescription(productDescription);
	    productDetails.setProductPrice(productPrice);
	    productDetails.setProductSKU(productSKU);
	    productDetails.setProductAvailablety(productAvailability);
	    productDetails.setProductDiscounts(productDiscount);
	    
	    byte[] imageBytes = productImage.getBytes();
	    productDetails.setProductImage(imageBytes);
	    
	    return productService.saveProduct(productDetails);
	}
	
	@GetMapping("/getProductName/{productName}")
	public List<ProductDetails> getProductByProductName(@PathVariable String productName){
		System.out.println("In the productController"+ productName);
		return productService.getProductByProductName(productName);
	}

}
