import { useState } from "react";

function AddProject({setShowAddProj}){
    const [inp,setInp]=useState(); 
    function submitHandler(){
        setShowAddProj(false)
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
