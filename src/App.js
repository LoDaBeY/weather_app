import TextField from "@mui/material/TextField";
import "./App.css";
import { useState } from "react";
import { Button } from "@mui/material";
import StormIcon from "@mui/icons-material/Storm";

function App() {
  const [Location, setLocation] = useState("");
  const [data, setdata] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&units=imperial&appid=c949f569bf1e1840f93ad20f9ced79fd`;
  const SearchTool = () => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setdata(result);
      });
  };
  return (
    <div className="App">
      <div className="SearchAndBtn">
        <div className="SBContainer">
          <div className="search">
            <TextField
              id="outlined-basic"
              label="Search City Here"
              variant="outlined"
              color="info"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <Button
            className="Btn"
            sx={{
              ml: 4,
            }}
            variant="contained"
            endIcon={<StormIcon />}
            onClick={SearchTool}
          >
            Send
          </Button>
        </div>
      </div>

      <div className="container">
        <div className="Top">
          <div className="description">
            <p>{data.name}</p>
            {data.main? <h1>{data.main.temp.toFixed()}°F</h1> : null }
            
          </div>

          <div className="Weatherlike">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        <div className="bottom">
          <div className="Feelslike">
            {data.main ? <p className="bold">{data.main.feels_like.toFixed()}%</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="Humidity">
          {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
          {data.main ? <p className="bold">{data.wind.speed.toFixed()}</p> : null}
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
