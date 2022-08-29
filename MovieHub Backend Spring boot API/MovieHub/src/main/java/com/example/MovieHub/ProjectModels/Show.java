package com.example.MovieHub.ProjectModels;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document(collection = "show")
public class Show {
    @Id
    int id;
    int movieId;
    String theater;
    Location location;
    String timings;
    int price;
   
   
    public void setId(int id)
    {
        this.id=id;
    }
    public int getId() {
        return id;
    }
    public int getMovieId() {
        return movieId;
    }
    public void setMovieid(int movieid) {
        this.movieId = movieid;
    }
    public String getTheater() {
        return theater;
    }
    public void setTheater(String theatreid) {
        this.theater = theatreid;
    }
    public Location getLocation() {
        return location;
    }
    public void setLocation(Location location) {
        this.location = location;
    }
    public String getTimings() {
        return timings;
    }
    public void setTimings(String timings) {
        this.timings = timings;
    }
    public int getPrice() {
        return price;
    }
    public void setPrice(int price) {
        this.price = price;
    }

   
}
