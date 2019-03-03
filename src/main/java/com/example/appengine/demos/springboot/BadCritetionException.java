package com.example.appengine.demos.springboot;

public class BadCritetionException extends Exception{
	
	public BadCritetionException(String message) {
		super(message);
	}
	
	public BadCritetionException() {
		super();
	}
	
}