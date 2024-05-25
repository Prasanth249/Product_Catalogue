package com.webpage.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.webpage.entity.RegistertionTable;

@Repository
public interface RegistertionRepo extends JpaRepository<RegistertionTable, Integer> {

}
