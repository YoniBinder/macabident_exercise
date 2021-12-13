import './App.css';
import { useState,useEffect } from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import List from './components/List/List'
import Search from './components/Search/Search'
function App() {
  const [appData, setAppData] = useState();
  const [doctors, setDoctors] = useState([])
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    fetch("/doctors.json")
      .then((response) => response.json())
      .then((data) => {
        setAppData(data.doctors);
      });
  }, []);


  function updateSearch(searchInput){
    
    let newList=appData.filter((doctor)=>{
      return doctor.name.split(' ').filter((doc)=>{
        return doc.includes(searchInput)
      })
    })
    setSearchValue(searchInput)
    setDoctors(newList)
  }
  
  return (
    <div>
      <Header/>
      <Search updateSearch={updateSearch}/>
      <List doctors={doctors} searchValue={searchValue}/>
      <Footer/>
    </div>
  );
}

export default App;
