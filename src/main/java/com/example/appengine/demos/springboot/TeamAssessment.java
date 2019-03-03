package com.example.appengine.demos.springboot;

import java.util.ArrayList;
import java.util.List;

public class TeamAssessment {
	
	int teamNumber;
	List<Assessment> criteria;
	float mark;
	
	public TeamAssessment(int teamNumber) {
		super();
		this.teamNumber = teamNumber;
	}

	public TeamAssessment() {
		super();
	}
	
	public int getTeamNumber() {
		return teamNumber;
	}

	public void setTeamNumber(int teamNumber) {
		this.teamNumber = teamNumber;
	}

	public List<Assessment> getCriteria() {
		return criteria;
	}

	public void setCriteria(List<Assessment> criteria) {
		this.criteria = criteria;
		mark = 0;
		for(Assessment assessment: this.criteria) {
			mark = mark + assessment.getValueAsMark();
		}
		mark = mark / this.criteria.size();
		this.criteria = criteria;
	}

	public float getMark() {
		return mark;
	}

	public void setMark(float mark) {
		this.mark = mark;
	}
	
	

}
