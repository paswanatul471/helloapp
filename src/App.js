import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState(null);
  useEffect(()=>{
    fetch(
      `https://newsapi.org/v2/everything?q=tesla&from=2023-05-17&sortBy=publishedAt&apiKey=12b57f3f5a6b4ba0a04e4df8a2627c02`
    )
    .then((response)=> response.json())
    .then(setData);
  },[]);
if(data)
  return(
    <pre>{JSON.stringify(data,null,2)}</pre>
  )
  return (
    <>
    <h1>
      Data
    </h1>
    
    </>
  );
}

export default App;
