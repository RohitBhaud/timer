import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [time,setTime]=useState(0);
  const [timerun,setTimerun]=useState(false);

  useEffect(()=>{
    let interval=null;
    if(timerun){
      interval=setInterval(()=>{
        setTime(pr=>pr+10)
      },10)
    }
    else{
      clearInterval(interval)
    }
    return ()=>clearInterval(interval)
  },[timerun])



  return (
    <div className="App">
     <div>
       <span>{("0" +Math.floor((time/60000)%60)).slice(-2)}:</span>
       <span>{("0" +Math.floor((time/1000)%60)).slice(-2)}:</span>
       <span>{("0" +((time/10)%100)).slice(-2)}</span>
     </div>
     <div>
       {/* <button onClick={()=>setTimon(true)}>Start</button>
       <button onClick={()=>setTimon(false)}>Stop</button>
       <button onClick={()=>setTimon(true)}>Resume</button>
       <button onClick={()=>setTime(0)}>Reset</button> */}

       {!timerun && time===0 && (
         <button onClick={()=>setTimerun(true)}>Start</button>
       )}
        {timerun && (
         <button onClick={()=>setTimerun(false)}>Stop</button>
        )}
        {!timerun && time!==0 &&(
         <button onClick={()=>setTimerun(true)}>Resume</button>
         ) }
        {!timerun && time>0  &&(
         <button onClick={()=>setTime(0)}>Reset</button>
        )}
       
       
     </div>
    </div>
  );
}

export default App;