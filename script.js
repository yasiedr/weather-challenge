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
    // getweather(city)
    //function getweather(city) {
      //  var weatherinputurl `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        $.ajax({
            url: currentweatherurl,
            method: `GET`
        }).then(function(getdata){
            console.log(getdata)

    

        ;
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
        })


          
    // var input = document.querySelector('.input_text');
    // var main = document.querySelector('#name');
    // var temp = document.querySelector('.temp');
    // var desc = document.querySelector('.desc');
    // var clouds = document.querySelector('.clouds');
    // var button= document.querySelector('.submit');
    
    
    // button.addEventListener('click', function(name){
    // fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=fe626d3d1686e135361d033d1a310b52')
    // .then(response => response.json())
    // .then(data => {
    //   var tempValue = data['main']['temp'];
    //   var nameValue = data['name'];
    //   var descValue = data['weather'][0]['description'];
    
    //   main.innerHTML = nameValue;
    //   desc.innerHTML = "Desc - "+descValue;
    //   temp.innerHTML = "Temp - "+tempValue;
    //   input.value ="";
    
    // })
    
    // .catch(err => alert("Wrong city name!"));
    // })
    var fivedayforcasturl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&Appid=" + apiKey ;

    $.ajax({
        url: fivedayforcasturl,
        method: "GET"
    }).then(function (response) {
        // Array for 5-days
       
        var day = [0, 8, 16, 24, 32, 40];
        var fiveDayresult = $(".fiveDayresult").addClass("card-body");
        var fiveDayDiv = $(".fiveDays").addClass("card-title");
        fiveDayDiv.empty();
        // For each for 5 days
        day.forEach(function (i) {
            var FiveDayTimeUTC1 = new Date(response.list[i].dt * 1000);
            FiveDayTimeUTC1 = FiveDayTimeUTC1.toLocaleDateString("en-US");

            fiveDayDiv.append("<div class=fiveDaybox>" + "<p>" + FiveDayTimeUTC1 + "</p>" + `<img src="https://openweathermap.org/img/wn/${response.list[i].weather[0].icon}@2x.png">` + "<p>" + "Temperature: " + response.list[i].main.temp + "</p>" + "<p>" + "Humidity: " + response.list[i].main.humidity + "%" + "</p>" + "</div>");


        })

    });
 }   
)
;


refreshButtonEl.on('click', function () {
location.reload();
});
let pastCities =[]




// Store searched cities in local storage
function storeCities() {
localStorage.setItem('city', JSON.stringify(preities));
}
function loadCities() {
let savedCities = JSON.parse(localStorage.getItem('preCities'));
if (savedCities) {
    preCities = savedCities;

}
}
console.log(loadCities);



function refresh(){
window.location.reload("Refresh")
}