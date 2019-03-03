package com.example.appengine.demos.springboot;

public class TeamScore {
	
	float mark;
	int teamNumber;
		
	public TeamScore() {
		super();
	}
	
	public TeamScore(int teamNumber) {
		super();
		this.teamNumber = teamNumber;
	}
	
	public float getMark() {
		return mark;
	}
	
	public void setMark(float mark) {
		this.mark = mark;
	}
	
	public int getTeamNumber() {
		return teamNumber;
	}
	
	public void setTeamNumber(int teamNumber) {
		this.teamNumber = teamNumber;
	}

	@Override
	public String toString() {
		return "TeamScore [mark=" + mark + ", teamNumber=" + teamNumber + "]";
	}
	
}
