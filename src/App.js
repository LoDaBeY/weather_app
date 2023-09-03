import TextField from "@mui/material/TextField";
import "./App.css";
import { useState } from "react";
import { Button } from "@mui/material";
import StormIcon from "@mui/icons-material/Storm";

function App() {
  const [Location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=c949f569bf1e1840f93ad20f9ced79fd`;
  const SearchTool = () => {
    fetch(url)
    .then((res) => res.json())
    .then((result) => { console.log(result) })
  }
  return (
    <div className="App">
      <div className="SearchAndBtn">
        <div className="loda">
          <div className="search">
            <TextField
              id="outlined-basic"
              label="Search City Here"
              variant="outlined"
              color="info"
              onChange={(e) => setLocation(e.target.value) }
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
            <p>Damanhour</p>
            <h1>60°F</h1>
          </div>

          <div className="Weatherlike">
            <p>Clouds</p>
          </div>
        </div>

        <div className="bottom">
          <div className="Feelslike">
            <p className="bold">60%</p>
            <p>Feels Like</p>
          </div>
          <div className="Humidity">
            <p className="bold">20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className="bold">12 MPH</p>
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
