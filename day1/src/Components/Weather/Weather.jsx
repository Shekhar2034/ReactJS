import { useEffect, useState } from "react";
import axios from "axios";
import "./design.css";


function WeatherApp() {
  const [weatherData, setWeatherData] = useState([]);
  //   console.log(weatherData, "weatherData");

  async function GetWeather() {
    const options = {
      method: "GET",
      url: "https://yahoo-weather5.p.rapidapi.com/weather",
      params: {
        location: "Mumbai",
        format: "json",
        u: "f",
      },
      headers: {
        "x-rapidapi-key": "b6b41c4c36mshc64e9f833445bcdp1eb90ajsna123ad5f22d5",
        "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log([response.data]);
      setWeatherData([response.data]);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    // api call to backend
    GetWeather();
  }, []);

  return (
    <div>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        /> 
       </head>
       <h1 id="navbar"></h1> 
      {weatherData.map((weather) => (
        
        <div>
          <div id="parantdiv">
            <div id="parantbody">
              <div>
                <div id="newcity">
                  <p id="city">{weather.location.city} </p>
                  <p id="city">Timezone:{weather.location.timezone_id} </p>
                </div>
                <p id="country">{weather.location.country}</p>
                <p id="date">
                  {new Date(
                    weather.current_observation.pubDate * 1000
                  ).toLocaleString()}{" "}
                </p>
              </div>
              <div id="partlycloudy">
                <p className="cloudy">
                  <i class="fa-solid fa-cloud"></i>
                </p>
                <p className="cloudy">
                  {weather.current_observation.condition.text}
                </p>
              </div>
              <div id="temp">
                <p>{weather.current_observation.condition.temperature}&deg;F</p>
              </div>
              <div>
                <table id="tabledata">
                  <thead>
                    <tr id="trdata">
                      <th>Day</th>
                      <th id="tabledate">Date</th>
                      <th>Higest temperature</th>
                      <th>Lowest temperature</th>
                      <th>Weather</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr id="1">
                      <td>{weather.forecasts[0].day}</td>
                      <td>
                        {
                          new Date(weather.forecasts[0].date * 1000)
                            .toLocaleString()
                            .split(",")[0]
                        }
                      </td>
                      <td>{weather.forecasts[0].high}</td>
                      <td>{weather.forecasts[0].low}</td>
                      <td>{weather.forecasts[0].text}</td>
                    </tr>
                    <tr id="2">
                      <td>{weather.forecasts[1].day}</td>
                      <td>
                        {
                          new Date(weather.forecasts[1].date * 1000)
                            .toLocaleString()
                            .split(",")[0]
                        }
                      </td>
                      <td>{weather.forecasts[1].high}</td>
                      <td>{weather.forecasts[1].low}</td>
                      <td>{weather.forecasts[1].text}</td>
                    </tr>
                    <tr id="3">
                      <td>{weather.forecasts[2].day}</td>
                      <td>
                        {
                          new Date(weather.forecasts[2].date * 1000)
                            .toLocaleString()
                            .split(",")[0]
                        }
                      </td>
                      <td>{weather.forecasts[2].high}</td>
                      <td>{weather.forecasts[2].low}</td>
                      <td>{weather.forecasts[2].text}</td>
                    </tr>
                    <tr id="4">
                      <td>{weather.forecasts[3].day}</td>
                      <td>
                        {
                          new Date(weather.forecasts[3].date * 1000)
                            .toLocaleString()
                            .split(",")[0]
                        }
                      </td>
                      <td>{weather.forecasts[3].high}</td>
                      <td>{weather.forecasts[3].low}</td>
                      <td>{weather.forecasts[3].text}</td>
                    </tr>
                    <tr id="5">
                      <td>{weather.forecasts[4].day}</td>
                      <td>
                        {
                          new Date(weather.forecasts[4].date * 1000)
                            .toLocaleString()
                            .split(",")[0]
                        }
                      </td>
                      <td>{weather.forecasts[4].high}</td>
                      <td>{weather.forecasts[4].low}</td>
                      <td>{weather.forecasts[4].text}</td>
                    </tr>
                    <tr id="6">
                      <td>{weather.forecasts[5].day}</td>
                      <td>
                        {
                          new Date(weather.forecasts[5].date * 1000)
                            .toLocaleString()
                            .split(",")[0]
                        }
                      </td>
                      <td>{weather.forecasts[5].high}</td>
                      <td>{weather.forecasts[5].low}</td>
                      <td>{weather.forecasts[5].text}</td>
                    </tr>
                    <tr id="7">
                      <td>{weather.forecasts[6].day}</td>
                      <td>
                        {
                          new Date(weather.forecasts[6].date * 1000)
                            .toLocaleString()
                            .split(",")[0]
                        }
                      </td>
                      <td>{weather.forecasts[6].high}</td>
                      <td>{weather.forecasts[6].low}</td>
                      <td>{weather.forecasts[6].text}</td>
                    </tr>
                    <tr id="8">
                      <td>{weather.forecasts[7].day}</td>
                      <td>
                        {
                          new Date(weather.forecasts[7].date * 1000)
                            .toLocaleString()
                            .split(",")[0]
                        }
                      </td>
                      <td>{weather.forecasts[7].high}</td>
                      <td>{weather.forecasts[7].low}</td>
                      <td>{weather.forecasts[7].text}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WeatherApp;