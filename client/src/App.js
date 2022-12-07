import { Route, Switch } from "react-router-dom";
import SignIn from "./signin/SignIn"
import Employees from "./features/employees/Employees"
import Customers from "./features/customers/Customers"
import Projects from "./features/projects/Projects"
import HomeCarousel from "./homeheader/HomeCarousel";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProjects } from "./features/projects/projectsSlice";
import { fetchCustomers } from "./features/customers/customersSlice";
import { fetchEmployees } from "./features/employees/employeesSlice";
import Navigation from "./navbar/Navigation"

function App() {

  const [searchData, setSearchData] = useState("")


  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [weatherData, setWeatherData] = useState([])
  

  const dispatch = useDispatch();

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus("Location Determined");
        setLat(parseFloat(position.coords.latitude).toFixed(2));
        setLng(parseFloat(position.coords.longitude).toFixed(2));
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }


  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchCustomers());
    dispatch(fetchEmployees());
    getLocation();
    console.log(lat)
    console.log(lng)
    
    setTimeout(() => {

      console.log(lat)
      console.log(lng)
      fetch( `http://www.7timer.info/bin/civillight.php?lon=${lng}&lat=${lat}&ac=0&lang=en&unit=brittish&output=json&tzshift=0`).then((res) => res.json())
      .then(data => console.log(data.dataseries));

      console.log(`weather data : ${weatherData}`)

    }, 4000)
  
    

  }, [dispatch]);

  return (
    <div>
      <Navigation setSearchData={setSearchData}/>
      {window.location.pathname === "/" ? <></> : <HomeCarousel weatherData ={weatherData} lat={lat} lng={lng} status={status} />}
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>      
        <Route exact path="/r-customers">
          <Customers searchData={searchData}/>
        </Route>
        <Route exact path="/r-employees">
          <Employees searchData={searchData}/>
        </Route>
        <Route exact path="/r-projects" >
          <Projects searchData={searchData}/>
        </Route>
      </Switch>
     
    </div>
  );
}

export default App;
