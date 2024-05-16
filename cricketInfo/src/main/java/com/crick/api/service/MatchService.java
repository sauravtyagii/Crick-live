package com.crick.api.service;

import java.util.List;
import java.util.Map;


import com.crick.api.entites.Match;
public interface MatchService {
	
	List<Match> getAllMatches();
	
	List<Match> getLiveMatches();
	
	List<Map<String,String>> getPointTable();

}
