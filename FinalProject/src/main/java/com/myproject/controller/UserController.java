package com.myproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.myproject.model.User;
import com.myproject.service.UserService;


@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
	
	@Autowired
	private UserService service;
	
	@PostMapping("/user")
	public User newUser(@RequestBody User newUser) {
		return service.saveUser(newUser);
	}
	
	@GetMapping("/user/{id}")
	public User getUserById(@PathVariable Integer id) {
		return service.getUserById(id);
	}
	
//	@GetMapping("/user/{email}")
//	public User getUserById(@PathVariable String email) {
//		return service.getUserByEmail(email);
//	}
	
	@DeleteMapping("user/{id}")
	public String deleteUser(@PathVariable Integer id) {
		return service.deleteUser(id);
	}
	
	@GetMapping("/users")
	List<User> getAllUsers(){
		return service.getUsers();
	}
	
	@PutMapping("/update")
	public User updateUser(@RequestBody User newUser) {
		return service.updateUser(newUser);
	}
}		
