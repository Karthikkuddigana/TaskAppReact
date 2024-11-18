import { useState } from 'react'
import './App.css'
import AddProject from './Components/AddProject'
function App() {
  const [showAddProj,setShowAddProj]=useState(false); 
  return (
    <>
      <div id="MainContainer">
        <div id="ProjectContainer">
          <div id='ProjectHeader'>My Projects</div>
          {!showAddProj && <div id='BtnAddProjects' onClick={()=>{setShowAddProj(true)}}>Add Projects</div>}
          {showAddProj && <AddProject setShowAddProj={setShowAddProj}></AddProject>}
        </div>
        <div id="TaskContainer"></div>
      </div>
    </>
  )
}

export default App
