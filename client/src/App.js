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
  const [currentUser, setCurrentUser] = useState(false)
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  const [weather, setWeather] = useState([])
  const [page, setPage] = useState("/")



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


  const updateUser = (user) => setCurrentUser(user)

  useEffect(() => {

  
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => updateUser(user));
      }
      console.log(`current user ${currentUser}`)
    })

    dispatch(fetchProjects());
    dispatch(fetchCustomers());
    dispatch(fetchEmployees());


    setPage(window.location.pathname)



  }, []);


  useEffect(() => {

    if (lng & lat ) {
        console.log('lng at lat are good')
    }

    else {

        getLocation() 
    
    }   
  
         
  }, []);

useEffect(() => {

    fetch( `https://www.7timer.info/bin/civillight.php?lon=${lng}&lat=${lat}&ac=0&lang=en&unit=metric&output=json&tzshift=0`)
    .then((res) => res.json())
    .then(data => setWeather(data.dataseries));
  
   ;  

  }, [lng, lat]);


  return (
    <div>

      <Navigation setPage={setPage} currentUser={currentUser} 
      updateUser={updateUser}
      setSearchData={setSearchData} />
      {page === "/" ? <></> : <HomeCarousel lat={lat} lng={lng} status={status} weather={weather} />}
      <Switch>
        <Route exact path="/">
          <SignIn setPage={setPage} updateUser={updateUser} />
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
