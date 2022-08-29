package com.example.MovieHub.Repository;
import java.util.List;

import com.example.MovieHub.ProjectModels.Show;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;


public interface ShowRepository extends MongoRepository<Show, Integer>{

    @Query("{'movieId':?0}")
   public List<Show> getShowBYPincode(int movieId,String pincode);
}
