package com.example.MovieHub.Service;



import java.util.List;
import java.util.Optional;

import com.example.MovieHub.ProjectModels.Movie;
import com.example.MovieHub.ProjectModels.Show;
import com.example.MovieHub.ProjectModels.Location;
import com.example.MovieHub.Repository.MovieRepository;
import com.example.MovieHub.Repository.ShowRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.stream.Collectors;
@Service
public class service {
    
    @Autowired
    private MovieRepository mrepo;
    
    public String  saveMovie(Movie movie)
    {
        if(movie.getName()=="")
        {
            return "cant write to db";
        }
        int newid=(int)(mrepo.count())+1;
        movie.setId(newid);
        mrepo.save(movie);
        return "Add movie with id:"+movie.getId();
    }
    public List<Movie> allMovies()
    {
      List<Movie> lis=mrepo.findAll();
        return lis;
    }
   
    @Autowired
    ShowRepository srepo;

    public String saveShow(Show show)
    {
       
        int newid=(int)(srepo.count())+1;
        show.setId(newid);
        srepo.save(show);
        return "Add movie with id:"+show.getId();
    }
    public void delete(int id)
    {
srepo.deleteById(id);
    }


    public Optional<Movie> getmovieById(int id)
    {
return mrepo.findById(id);
    }

    public List<Show> findbyPincode(int movieId,String pincode)
    {
       List<Show> lis =srepo.findAll();
List<Show> res=lis.stream().filter(s->s.getMovieId()==movieId && s.getLocation().getPincode().equals(pincode)).collect(Collectors.toList());
return res;
    }





    public int getNoShowLocation(int movieId)
    {
        List<Show> lis =srepo.findAll();
        List<Show> res=lis.stream().filter(s->s.getMovieId()==movieId ).collect(Collectors.toList());
        return res.size();
    }
}
