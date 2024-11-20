import { useState } from "react";

function AddProject({setShowAddProj,setProjects}){
    const [inp,setInp]=useState(); 
    function submitHandler(){
        setShowAddProj(false)
        setProjects((projects)=>{ 
            let k; 
            if(projects.length==0){
                k=1; 
                console.log(k)
            }
            else{
                k=projects[projects.length-1].id+1; 
                console.log(k)
            }
            let tempProj={tasks:[]}; 
            tempProj.id=k; 
            tempProj.projName=inp; 

            console.log([...projects,tempProj])
            return [...projects,tempProj]
        })
    }
    function cancelHandler(){
        setShowAddProj(false)
    }
    function changeHandler(e){
        setInp(e.target.value); 
        console.log(inp)
    }
    return (
    <>
    <div style={{position:"relative", top:"20px", left:"20px"}}>
        <label htmlFor="ProjectInput">Name:</label>
        <input type="text" name="ProjectInput" id="ProjectInput" onChange={changeHandler}/>
        <button onClick={submitHandler}>Submit</button>
        <button onClick={cancelHandler}>Cancel</button>
    </div>
    </>
    )
}
export default AddProject; 
