import { useState } from 'react'
import './App.css'
import AddProject from './Components/AddProject'
import TaskList from './Components/TaskList'

function App() {
  const [showAddProj,setShowAddProj]=useState(false); 
  const [projects,setProjects]=useState([]); 
  const [taskContent,setTaskContent]=useState(); 
  let cssObj={
    border:"2px solid black", 
    width: "100%", 
    boxSizing:"borderBox", 
  }
  function Projects({projects,setTaskContent}){
    function handleProjClick(e){
      let key=e.target.getAttribute("keys"); 
      console.log(e.target); 
      console.log(key); 
      setTaskContent(key); 
    }
    if(projects.length!=0){
      let projectListElements= projects.map(i=><div key={i.id} style={cssObj} keys={i.id} onClick={handleProjClick}>{i.projName}</div>); 
      return (<>
        {console.log(projectListElements)}
        {projectListElements}
      </>)
    }
  }
  return (
    <>
      <div id="MainContainer">
        <div id="ProjectContainer">
          <div id='ProjectHeader'>My Projects</div>
          {!showAddProj && <div id='BtnAddProjects' onClick={()=>{setShowAddProj(true)}}>Add Projects</div>}
          {showAddProj && <AddProject setShowAddProj={setShowAddProj} setProjects={setProjects}></AddProject>}
          <div id="ProjectListing" style={{display:"flex", flexDirection:"column",justifyContent:"flex-end",width:"100%"}}>
            <Projects projects={projects} setTaskContent={setTaskContent}></Projects>
          </div>
        </div>
        <div id="TaskContainer"><TaskList myKey={taskContent} projects={projects}></TaskList></div>
      </div>
    </>
  )
}

export default App
