package com.myproject.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myproject.model.User;


public interface Userrepository extends JpaRepository<User,Integer>{

	Optional<User> findByFirstname(String firstname);

}
