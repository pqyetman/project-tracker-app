import { Route, Switch, useLocation } from "react-router-dom";
import SignIn from "./signin/SignIn"
import Employees from "./features/employees/Employees"
import Customers from "./features/customers/Customers"
import Projects from "./features/projects/Projects"
import HomeCarousel from "./homeheader/HomeCarousel";
import { useEffect, useState } from "react";
import Navigation from "./navbar/Navigation";
import { useDispatch } from "react-redux";
import { fetchProjects } from "./features/projects/projectsSlice";
import { fetchCustomers } from "./features/customers/customersSlice";
import { fetchEmployees } from "./features/employees/employeesSlice";
import { useSelector } from "react-redux";

function App() {

  const [searchData, setSearchData] = useState("")
  const [currentUser, setCurrentUser] = useState(false)
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [weather, setWeather] = useState([])
  
 
  const { pathname } = useLocation();

  const dispatch = useDispatch();


  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
      setLng("40.7")
      setLat("-74.00")
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus("Location Determined");
        setLat(parseFloat(position.coords.latitude).toFixed(2));
        setLng(parseFloat(position.coords.longitude).toFixed(2));
      }, () => {
        setLng("40.7")
        setLat("-74.00")
        setStatus('Unable to retrieve your location');
      });
    }
  }


  const updateUser = (user) => setCurrentUser(user)

  useEffect(() => {
    
    if (lng === null & lat === null) {getLocation()}

  
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => updateUser(user));
      }
      console.log(`current user ${currentUser}`)
    })


   
    dispatch(fetchCustomers());
    dispatch(fetchEmployees());  
    dispatch(fetchProjects());  



  }, []);





useEffect(() => {

  if (typeof lng === "string" & typeof lat === "string" ) {

    console.log("Fething weather data")

    fetch( `https://www.7timer.info/bin/civillight.php?lon=${lng}&lat=${lat}&ac=0&lang=en&unit=metric&output=json&tzshift=0`)
    .then((res) => res.json())
    .then(data => setWeather(data.dataseries));

  }  


  }, [lng, lat]);


  return (
    <div>

      <Navigation  currentUser={currentUser} 
      updateUser={updateUser}
      setSearchData={setSearchData} />
      { pathname !== "/" ? <HomeCarousel lat={lat} lng={lng} status={status} weather={weather} /> : <></>}
      <Switch>
        <Route exact path="/">
          <SignIn  updateUser={updateUser} />
        </Route>
        <Route exact path="/r-customers">
          <Customers searchData={searchData} />
        </Route>
        <Route exact path="/r-employees">
          <Employees searchData={searchData} />
        </Route>
        <Route exact path="/r-projects" >
          <Projects searchData={searchData} />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
