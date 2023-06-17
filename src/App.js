import './App.css';
import { useState } from 'react';
function App() {
  const[checked, setChecked] = useState(false);

  return (
    <>
    <input type="checkbox" value={checked} onChange={()=>setChecked((checked)=>!checked)} />
    <label >
      {checked ? "checked" : "not checked"}
    </label>
    
    </>
  );
}

export default App;
