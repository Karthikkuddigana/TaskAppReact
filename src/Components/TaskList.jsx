function TaskList({myKey,projects}){
    let myProj=null; 
    for(let proj of projects){
        if(proj.id==myKey){
            myProj=proj; 
        }
    }
    console.log(myProj,myKey)
    return (<>
        {myProj && <div>{myProj.projName}</div>}
    </>)
}
export default TaskList; 