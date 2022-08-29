package com.example.MovieHub.ProjectModels;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@ToString

@Document(collection = "location")
 public class Location{

   String areaName;
    String city;
   String  district;
   String error;
   String pincode ;
   String stateName ;
public String getAreaName() {
    return areaName;
}
public void setAreaName(String areaName) {
    this.areaName = areaName;
}
public String getCity() {
    return city;
}
public void setCity(String city) {
    this.city = city;
}
public String getDistrict() {
    return district;
}
public void setDistrict(String district) {
    this.district = district;
}
public String getError() {
    return error;
}
public void setError(String error) {
    this.error = error;
}
public String getPincode() {
    return pincode;
}
public void setPincode(String pincode) {
    this.pincode = pincode;
}
public String getStateName() {
    return stateName;
}
public void setStateName(String stateName) {
    this.stateName = stateName;
}

 }