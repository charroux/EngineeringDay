package com.example.appengine.demos.springboot;

import java.util.ArrayList;
import java.util.List;

public class Criterion {
	
	String criterion;
	List<CriterionValues> criterionValues = new ArrayList<CriterionValues>();

	public Criterion() {
		super();
	}

	public Criterion(String criterion) {
		super();
		this.criterion = criterion;
	}

	public void addCriterionValues(CriterionValues values) {
		this.criterionValues.add(values);
	}
	
	public String getCriterion() {
		return criterion;
	}
	
	public void setCriterion(String criterion) {
		this.criterion = criterion;
	}
	
	public List<CriterionValues> getCriterionValues() {
		return criterionValues;
	}
	
	public void setCriterionValues(List<CriterionValues> criterionValues) {
		this.criterionValues = criterionValues;
	}

	@Override
	public String toString() {
		return "Criterion [criterion=" + criterion + ", CriterionValues=" + criterionValues + "]";
	}

}
