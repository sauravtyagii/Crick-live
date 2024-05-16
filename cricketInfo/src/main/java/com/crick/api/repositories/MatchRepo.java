package com.crick.api.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crick.api.entites.Match;

public interface MatchRepo extends JpaRepository<Match, Integer> {
	//match fatch karna chahta hu 
	// provide karde --> TeamName
	Optional<Match> findByTeamHeading(String teamHeading); 

}
