function buttonClicked() {
    var city = document.getElementById("searchData").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${city}`)
      .then(response => response.json())
      .then(data => {
        // Handle the API response here
        console.log(data);
        document.getElementById("city").innerHTML="City : " + data.meals[0].strMeal
      });
  }
    //
    //document.getElementById("long").innerHTML="Longtitude : " + data.coord.lon
    //document.getElementById("lat").innerHTML="Latitude : " + data.coord.lat
    //document.getElementById("desc").innerHTML="Weather Description : " +data.weather[0].descriptio//n

    //document.getElementById("tempC").innerHTML="Current Tempature : " + parseInt(data.main.temp - 273.15)
    //document.getElementById("tempMin").innerHTML="Min Tempature : " + parseInt(data.main.temp_min - 273.15)
    //document.getElementById("tempMax").innerHTML="Max Tempature : " + parseInt(data.main.temp_max - 273.15)
   
    //document.getElementById("humid").innerHTML="Humidity : " +data.main.humidity
    //document.getElementById("wind").innerHTML="Wind speed : " +data.wind.speed

    //document.getElementById("sunrise").innerHTML="Sunrise : " + Date(data.sys.sunrise*1000)
    //document.getElementById("sunset").innerHTML="Sunset : " + Date(data.sys.sunset*1000)




 //To search city with same weather

     // List of cities you're interested in
     //var city = ['New York', 'London', 'Tokyo'];
