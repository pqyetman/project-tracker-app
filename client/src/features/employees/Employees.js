
import { useSelector } from "react-redux";

function Employees({searchData}) {

    const employees = useSelector((state) => state.employees.entities);

    const filteredEmployees = employees.filter(employee => {
        return employee.name.toLowerCase().includes(searchData.toLowerCase())
      })

    return (
        <>
          
            
        </>

    )
}

export default Employees;