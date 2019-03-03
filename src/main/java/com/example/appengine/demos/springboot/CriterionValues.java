package com.example.appengine.demos.springboot;

public class CriterionValues {
	
	int value;
	String name;
	
	public CriterionValues() {
		super();
	}

	public CriterionValues(int value, String name) {
		super();
		this.value = value;
		this.name = name;
	}

	public int getValue() {
		return value;
	}

	public void setValue(int value) {
		this.value = value;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "CriterionValues [value=" + value + ", name=" + name + "]";
	}
	
}
