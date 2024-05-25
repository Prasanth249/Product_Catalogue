package com.webpage.entity;

import java.util.Arrays;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class ProductDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int productId;
	private String productName;
	private String productDescription;
	private float productPrice;
	private String productAvailablety;
	private int productSKU;
	private float productDiscount;
	@Lob
	@Column(name = "product_image", columnDefinition = "LONGBLOB")
	private byte[] productImage;
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductDescription() {
		return productDescription;
	}
	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}
	public float getProductPrice() {
		return productPrice;
	}
	public void setProductPrice(float productPrice) {
		this.productPrice = productPrice;
	}

	public int getProductSKU() {
		return productSKU;
	}
	public void setProductSKU(int productSKU) {
		this.productSKU = productSKU;
	}
	public float getProductDiscounts() {
		return productDiscount;
	}
	public void setProductDiscounts(float productDiscount) {
		this.productDiscount = productDiscount;
	}
	public byte[] getProductImage() {
		return productImage;
	}
	public void setProductImage(byte[] productImage) {
		this.productImage = productImage;
	}
	public String getProductAvailablety() {
		return productAvailablety;
	}
	public void setProductAvailablety(String productAvailablety) {
		this.productAvailablety =  productAvailablety;
	}
	@Override
	public String toString() {
		return "ProductDetails [productId=" + productId + ", productName=" + productName + ", productDescription="
				+ productDescription + ", productPrice=" + productPrice + ", productAvailability=" 
				+ ", productSKU=" + productSKU + ", productDiscounts=" + productDiscount + ", productImage="
				+ Arrays.toString(productImage) + "]";
	}
	
}
