function getInputValue(){
    const inputVal = document.querySelector("#myInput").value;
    const ForCast=document.getElementsByClassName('Day')
    const Temprature=document.querySelector('.cityTemp');
    const Weather=document.querySelector('.weatherStatus');
    const LastUpdate=document.querySelector('.weatherStatusDetails');
    const WindSpeed=document.querySelector('.WindSpeed');
    const WindDegree=document.querySelector('.WindDegree');
    const Humidity=document.querySelector('.HumidityIn');
    const Pressure=document.querySelector('.PressureIn');
    const Temp=document.querySelector('.TempRa');
    const wicon= document.querySelector('.wIcon');
    let api =`http://api.weatherapi.com/v1/current.json?key=ef70dabc150d49c6a95185146212802&q=${inputVal}&days=5`;
fetch(api)
.then(response => {
	return response.json();
}).then(data =>{
    console.log(data);
  //  for(let i = 0;i<10;i++){
  //  ForCast[i].textContent=data.list[i].dt_txt;
  // };

   Temp.textContent=`${Math.floor((data.current.temp_c))}C`;
   Weather.textContent=data.current.condition.text;
   LastUpdate.textContent=`Last update : ${data.current.last_updated}`;
   Humidity.textContent=`${data.current.humidity}%`;
   WindSpeed.textContent=`${data.current.wind_kph} KM`;
   WindDegree.textContent=`${data.current.wind_degree}°`;
   Pressure.textContent=`${data.current.pressure_mb}`;
   const wiconConv = data.current.condition.icon;
   console.log(wiconConv.replace(/\//g,"/"));
   wicon.src=wiconConv.replace(/\//g,"/"); 
   wicon.src=wiconConv.replace("//"," "); 
})

}
