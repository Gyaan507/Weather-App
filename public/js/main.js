const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
  event.preventDefault();

  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerText = `Enter a city name to know weather`;
    datahide.classList.add('data_hide');
  }
  else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=fe2f51b5ecf31f69a4e9ad4dba82e670`
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const arrData = [data];

      city_name.innerText=`City: ${arrData[0].name}, ${arrData[0].sys.country}`;
      temp.innerText = `${arrData[0].main.temp} °C`;

      // temp_status.innerText = arrData[0].weather[0].main;
      const tempStaus = arrData[0].weather[0].main;
      if(tempStaus==="Clear"){
        temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
      }
      else if (tempStaus === "Clouds") {
        temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
      }
      else if (tempStaus==="Rain") {
        temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
      }
      else{
        temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
      }
      datahide.classList.remove('data_hide');

    }
    catch {
      city_name.innerText = `Wrong city name, check spelling and retry again`;
      datahide.classList.add('data_hide');

    }
  }

  }



submitBtn.addEventListener('click', getInfo);