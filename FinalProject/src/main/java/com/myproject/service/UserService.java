package com.myproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myproject.model.User;
import com.myproject.repository.Userrepository;

@Service
public class UserService {
	
	@Autowired
	private Userrepository userRepository;

	public User saveUser(User user) {
		return userRepository.save(user);
	}
	
	public List<User> getUsers(){
		return userRepository.findAll();
	}
	
	public User getUserById(int id) {
		return userRepository.findById(id).orElse(null);
	}
	
	public User getUserByEmail(String name) {
		return userRepository.findByFirstname(name).orElse(null);
	}
	
	public String  deleteUser(int id) {
		 userRepository.deleteById(id);
		 return "User removed successfully with id = "+id;
	}
	
	public User updateUser(User user) {
		User existingUser=userRepository.findById(user.getUser_id()).orElse(null);
		existingUser.setFirstname(user.getFirstname());
		existingUser.setLastname(user.getLastname());
		existingUser.setEmail(user.getEmail());
		existingUser.setPassword(user.getPassword());
		return userRepository.save(existingUser);
		
	}
}
