import { useEffect, useState } from 'react';
import './App.css';
import ScreenOne from './components/ScreenOne/ScreenOne';
import ScreenTwo from './components/ScreenTwo/ScreenTwo';

function App() {
  const [tableData, setTableData] = useState([])
  const url='http://localhost:8000'

  useEffect(()=>{
    const getTableData = async()=>{
      const getTableDataFromServer = await fetchTableData()
      setTableData(getTableDataFromServer)
    }
    getTableData()
  },[])
  

  const formSub = async (data) => {
    const res = await fetch(`${url}/screenTwoData`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const newdata = await res.json();
    if (res.ok) {
      setTableData([...tableData, newdata]);
    }
  };

    // get all table Data
    const fetchTableData = async () => {
      const res = await fetch(`${url}/screenTwoData`);
      const data = await res.json();
  
      return data;
    };


  return (
    <div>
      <ScreenOne formSub={formSub}/>
      <ScreenTwo 
        tableData={tableData} 
        />
    </div>
  );
}

export default App;
