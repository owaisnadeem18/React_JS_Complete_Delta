import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBox.css";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import WeatherDetails from "./WeatherDetails";

export default function SearchBox() {
  const [Searchcity, setSearchcity] = useState();
  const [isData, SetIsData] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_Key = "63c0dbe60e6e510d69087ba35df55577";

  const handleChange = (e) => {
    setSearchcity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Searchcity);
    setSearchcity("");
    getWeatherData();
  };

  const getWeatherData = async () => {
    let APIData = await fetch(`${API_URL}?q=${Searchcity}&appid=${API_Key}`);
    let jsonData = await APIData.json();
    console.log(jsonData);
    SetIsData(true);
  };

  return (
    <>
      <div className="search-container">
        <h2>Weather App Using Material UI</h2>
        <form action="" onSubmit={handleSubmit}>
          <TextField
            id="city"
            label="Search City"
            required
            variant="standard"
            value={Searchcity}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            type="submit"
            startIcon={<SearchIcon />} // This adds the icon to the left of the text
          >
            Search
          </Button>
        </form>
      </div>
      {isData && <div className="APIResult"> {<WeatherDetails />}</div>}
    </>
  );
}
