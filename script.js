var searchButton = $(".searchButton");

var apiKey = "fe626d3d1686e135361d033d1a310b52"

//var currentweather = document.getElementById('currentweather')
//var futureweather = document.getElementById('5dayforcast')




    searchButton.click(function () {

    var city = $(".searchInput").val();
   
     //$(`.searchInput`).on(`submit`, function(event){
   //event.preventDefault()
//     
   })
    
    getweather(city)
    function getweather(city) {
        var weatherinputurl `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        $.ajax({
            url: weatherinputurl,
            method: `GET`
        }).then(function(weatherData){
            console.log(weatherData)

    }

        );
    var savedcities = document.getElementById('city').value;
    localStorage.setItem('city', savedcities);
    

        //current weather append
        var cardlist = $(".cardlist").append("<div>").addClass("card-body");
        cardlist.empty();
        var currentcitycard = cardlist.append("<p>");
        
        cardlist.append(currentcitycard);

        // Adjust Date 
        var timeUTC = new Date(response.dt * 1000);
        currentcitycard.append(response.name + " " + timeUTC.toLocaleDateString("en-US"));

        
  
          
            