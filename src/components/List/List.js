import React,{useState,useEffect} from "react";
import sidePic1 from "../../assets/side-pic-1.png";
import sidePic2 from "../../assets/side-pic-2.png";
import Card from "../Cards/Card";
import "./List.scss";
export default function List({ doctors,searchValue}) {


const [filterList, setFilterList] = useState(["שם","התמחות","עיר"])
const [newList, setNewList] = useState([])

useEffect(() => {
  doctors.sort((a, b) => a.name.localeCompare(b.name))
  setNewList(doctors)
  
}, [doctors])

function handleFilter(event,idx){
  let newfilterList=[...filterList]
  let newDoctorList=[...doctors]
  switch(event.target.outerText) {
    case "שם":
      [newfilterList[0],newfilterList[idx]]=[newfilterList[idx],newfilterList[0]]
      newDoctorList.sort((a, b) => a.name.localeCompare(b.name))
      break;
    case "התמחות":
      [newfilterList[0],newfilterList[idx]]=[newfilterList[idx],newfilterList[0]]
      newDoctorList.sort((a, b) => a.profession.localeCompare(b.profession))
      break;
    case "עיר":
      [newfilterList[0],newfilterList[idx]]=[newfilterList[idx],newfilterList[0]]
      newDoctorList.sort((a, b) => a.city.localeCompare(b.city))
      break;
    default:
      break;
  }
  setFilterList(newfilterList)
  setNewList(newDoctorList)
}

  return (
    <div>
      <div className="pics-container">
        <div className="grid-item">
          <img className="rightPic" src={sidePic1} alt="..." />
        </div>
        <div className="grid-item">
          {searchValue!==""&& (
            <div className="searchInput">מציג {doctors.length} תוצאות חיפוש לפי הערך: <b>{searchValue}</b></div>
          )}
        </div>
        <div className="grid-item">
          <img className="leftPic" src={sidePic2} alt="..." />
        </div>
      </div>

      <div className="cards-container">
        {doctors.length > 0 && (
          <div>
            <div> מיין לפי:  
            <span className="dropdown">
               <span className="category">&nbsp;{filterList[0]}</span>  
               <i className="arrow-down"></i>
              <div className="dropdown-content">
                {filterList.map((item,idx)=>{
                  return(
                    idx!==0 && <div key={idx} onClick={event=>handleFilter(event,idx)}>{item}</div>
                  )
                })
                }
               
              </div>
            </span>
            </div>
            <hr className="seperator"/>
            {newList.map((doctor) => {
              return (
                <Card
                  key={doctor.id}
                  id={doctor.id}
                  name={doctor.name}
                  city={doctor.city}
                  profession={doctor.profession}
                  address={doctor.address}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
