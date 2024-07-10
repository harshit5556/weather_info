console.log('hello jee');
const   API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
//const API_KEY = "5022a53bce274c95200f495e75e22dfe";
async function showWeather() {
   // let latitude = 15.333;
   // let longitude =74.88;
   let city = "SULTANPUR";
// const   API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
   const data =  await response.json();
   console.log("Weather data:->",data);
   let newPara = document.createElement('p');
   newPara.textContent = `${data?.main?.temp.toFixed(2)} C`
   document.body.appendChild(newPara);
}

async function  getCustomWeatherDetails() {
   try{
    let lat = 15.633;
    let lon = 18.333;
    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
     let data = await result.json();
     console.log(data);
   }
   catch(err){
   console.log("error found",err);
   }
 }

 function switchTab(clickedTab) {
 apiErrorContainer.classList.remove("active");

 if(clickedTab !== currentTab) {
    currentTab.classList.remove("current-tab");
    currentTab = clickedTab;
     currentTab.classList.add("current-tab");

    if(!searchForm.classList.contains("active")) {
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        searchForm.classList.add("active");
    }
    else{
        searchForm.classList.remove("active");
        userInfoContainer.classList.remove("active");
    }
 }

}