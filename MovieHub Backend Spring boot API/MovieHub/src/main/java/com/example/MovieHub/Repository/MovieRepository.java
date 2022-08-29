package com.example.MovieHub.Repository;
import com.example.MovieHub.ProjectModels.Movie;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface MovieRepository extends MongoRepository<Movie, Integer>{

}
