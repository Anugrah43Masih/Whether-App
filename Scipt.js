const API_key = "2e75577e2a7e310f36d7be6e7ff3e6c3";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
 const Wheather_icon = document.querySelector(".Wheather-icon");

 async function checkWheather(city){
  const reponse = await fetch(API_URL + city+ `&appid=${API_key}`);

  if(reponse.status == 404){
    document.querySelector(".error").style.display ="block";
    document.querySelector(".wheather").style.display ="none";
  }else{

    var data = await reponse.json()
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".temp").innerHTML =Math.round( data.main.temp)+"℃";
    document.querySelector(".Wind").innerHTML = data.wind.speed+ "Km/H";
  
    if(data.weather[0].main == "Clouds"){
      Wheather_icon.src = "./weather-app-img/images/clouds.png"
    }else if(data.weather[0].main == "Clear"){
      Wheather_icon.src = "./weather-app-img/images/clear.png"
    }else if(data.weather[0].main == "Rain"){
      Wheather_icon.src = "./weather-app-img/images/rain.png"
    }else if(data.weather[0].main == "Haze"){
      Wheather_icon.src = "./weather-app-img/images/drizzle.png"
    }else if(data.weather[0].main == "Mist"){
      Wheather_icon.src = "./weather-app-img/images/mist.png"
    }else if(data.weather[0].main == "Snow"){
      Wheather_icon.src = "./weather-app-img/images/snow.png"
    }
    document.querySelector(".wheather").style.display ="block";
    document.querySelector(".error").style.display ="none";

  }
 

 }

 searchBtn.addEventListener("click" , ()=>{
  checkWheather(searchBox.value);

 })
