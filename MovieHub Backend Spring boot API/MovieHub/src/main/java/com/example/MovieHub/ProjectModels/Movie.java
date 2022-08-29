package com.example.MovieHub.ProjectModels;


import java.util.LinkedList;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

@Document(collection = "Movie")
public class Movie{

@Id

private int id;

private String name;
private String cast;
private String language;

private String genre;

public int getId() {
    return id;
}

public void setId(int id) {
    this.id = id;
}

public String getName() {
    return name;
}

public void setName(String name) {
    this.name = name;
}

public String getCast() {
    return cast;
}

public void setCast(String cast) {
    this.cast = cast;
}

public String getLanguage() {
    return language;
}

public void setLanguage(String language) {
    this.language = language;
}


public String getGenre() {
    return genre;
}

public void setGenre(String genre) {
    this.genre = genre;
}




}