import axios from 'axios';
import './App.css';
import Home from "./components/Home/Home.jsx"
import Search from './components/Search/Search.jsx';
import { useEffect, useState } from 'react';

function App() {
  const dummy=true;
  const [data, setData]= useState([]);
  const handleSearch = async(query) => {
  try {
    if(query!=='undefined'){
      const data = await axios.get(`${process.env.REACT_APP_API_URL}/api/dishes/search?name=${query}`)
      console.log(data)
      setData(data.data)
    }
     
  } catch (error) {
    
  }
  };
  useEffect(()=>{
  handleSearch();
  },[])
  return (
  <>
  <div className='App'>

  <div className="app-container">
   <div className='fix_it'>
   <div><h1 >Real time Toggling...</h1></div>
   
   <Search onSearch={handleSearch} />
   </div>
     
    </div>
<Home dishes2={data}/>
  </div>
  
  </>
  );
}

export default App;
