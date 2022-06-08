import React, {useState} from 'react'
import "./styles.css";
import axios from 'axios';
import MissionForm from './components/MissionForm';
import MissionList from './components/MissionList'
export default function App() {
  const [error,setError]= useState('')
  const[isFetchingData, setIsFetchingData]= useState(false)
  const[missions,setMissions]=useState([])

  const getData = () => {
    setIsFetchingData(true)
    console.log('button pushed')
    axios.get('https://api.spacexdata.com/v3/missions')
    .then(response =>{
      //console.log("beforesetmissions",missions)
      setMissions(response.data)
      console.log("response",response.data);
    setIsFetchingData(false)
    })

    .catch(error =>{
      console.log(`Error: ${error}`)
      setError(error)
      setIsFetchingData(false)
    })
  }
  return(
    <div className="App">
    <h1> Hello Everyone </h1>
    <h3>know about latest missions</h3>
    <MissionForm getDatabtn = {getData} isFetchingData={isFetchingData}/>
    <MissionList missionD={missions} errorD={error}/>
    </div>
  );
}