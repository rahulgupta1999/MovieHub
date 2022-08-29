package com.example.MovieHub.Restcontroller;

import java.util.List;
import java.util.Optional;

import com.example.MovieHub.ProjectModels.Movie;
import com.example.MovieHub.ProjectModels.Show;
import com.example.MovieHub.Service.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class controller {

    @Autowired
    private service serv;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addmovie")
    public String  saveMovie(@RequestBody Movie movie)
    {

        serv.saveMovie(movie);
        return "Add movie with id:"+movie.getId();
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/movies")
    public List<Movie> allMovies()
    {
      List<Movie> lis=serv.allMovies();
        return lis;
    }
    @GetMapping("/delete/{id}")
    public void deleteByID(@PathVariable int id)
    {
      serv.delete(id);
        
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addshow")
    public String  saveShow(@RequestBody Show show)
    {

        serv.saveShow(show);
        return "Add movie with id:"+show.getId();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/moviebyid/{id}")
    public Optional<Movie> getMovieByID(@PathVariable int id)
    {
    return serv.getmovieById(id);
        
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getShowByLocation/{movieId}/{pincode}")
    public List<Show> getShowByPincode(@PathVariable int movieId,@PathVariable String pincode)
    {
      
    return serv.findbyPincode(movieId,pincode);
     }
     @CrossOrigin(origins = "http://localhost:3000")
     @GetMapping("/getNoShowLocation/{movieId}")
     public int getNoShowLoaction(@PathVariable int movieId)
     {
       
     return serv.getNoShowLocation(movieId);
      }
     
}
