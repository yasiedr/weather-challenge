var searchButton = $(".searchButton");

var apiKey = "fe626d3d1686e135361d033d1a310b52"

//var currentweather = document.getElementById('currentweather')
//var futureweather = document.getElementById('5dayforcast')




    searchButton.click(function () {

    var city = $(".searchInput").val();
   
     $(`.searchInput`).on(`submit`, function(event){
   event.preventDefault()
//     
   })
   var currentweatherurl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&Appid=" + apiKey ;
    getweather(city)
    //function getweather(city) {
      //  var weatherinputurl `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        $.ajax({
            url: currentweatherurl,
            method: `GET`
        }).then(function(getdata){
            console.log(getdata)

    }

        );
    var savedcities = document.getElementById('city').value;
    localStorage.setItem('city', savedcities);
    

        //current weather append
        var infolist = $(".infolist").append("<div>").addClass("card-body");
        infolist.empty();
        var currentcitycard = infolist.append("<p>");
        
        infolist.append(currentcitycard);

        // Adjust Date 
        var timeUTC = new Date(response.dt * 1000);
        currentcitycard.append(response.name + " " + timeUTC.toLocaleDateString("en-US"));
        var currentresult = currentcitycard.append("");
          
            currentcitycard.append(currentresult);
            
            currentresult.append("Temperature: " + getdata.main.temp + "</br>");
            
            //wind speed
            currentresult.append("Wind Speed: " + getdata.wind.speed + "</br>");
            // Add Humidity
            currentresult.append("" + "Humidity: " + getdata.main.humidity + "%" + "");

        
  
          
            