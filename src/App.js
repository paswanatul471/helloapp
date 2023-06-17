import './App.css';
import { useState } from 'react';
function App() {
  const [emotion,setEmotion]= useState("Happy");

  return (
    <>
    <h1 style={{textAlign:'center'}}>I am feeling {emotion}</h1>
    <div style={{display:'flex',justifyContent:'center'}}>
      <button onClick={()=>setEmotion("sad")}>Sad</button>
    <button onClick={()=>setEmotion("very Bad")}>very Bad</button>
    <button onClick={()=>setEmotion("Very Happy")}>Very Happy</button>
    </div>
    
    </>
  );
}

export default App;
