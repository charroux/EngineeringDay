package com.example.appengine.demos.springboot;

public class Assessment {
	
	String criterion;
	String valueAsName;
	int valueAsMark;
	
	public Assessment(String criterion, String valueAsName, int valueAsMark) {
		super();
		this.criterion = criterion;
		this.valueAsName = valueAsName;
		this.valueAsMark = valueAsMark;
	}

	public Assessment() {
		super();
	}

	public String getCriterion() {
		return criterion;
	}
	
	public void setCriterion(String criterion) {
		this.criterion = criterion;
	}
	
	public String getValueAsName() {
		return valueAsName;
	}
	
	public void setValueAsName(String valueAsName) {
		this.valueAsName = valueAsName;
	}
	
	public int getValueAsMark() {
		return valueAsMark;
	}
	
	public void setValueAsMark(int valueAsMark) {
		this.valueAsMark = valueAsMark;
	}

	@Override
	public String toString() {
		return "Assessment [criterion=" + criterion + ", valueAsName=" + valueAsName + ", valueAsMark=" + valueAsMark
				+ "]";
	}
	
}
