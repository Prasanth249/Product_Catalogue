package com.webpage.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.webpage.entity.RegistertionTable;

@Repository
public interface LoginRepo extends JpaRepository<RegistertionTable, Integer> {

	public List<RegistertionTable> findBycustomerNameAndPassword(String username, String password);
}
