import React, { useState } from 'react'
import Recruiting from './Recruiting'
import Client from './Client'



const About = () => {

    const[status,setStatus]=useState("about")

    const renderContent =()=>{
        if( status === "Recruiting"){
        return <Recruiting />
        }
        if( status === "Client"){
            return <Client />
            }
    }
    


  return (

    <>
    <div>
    <p>admin pannel</p>
</div>
<button onClick={()=>setStatus("Recruiting")} >recruting</button><br/>
<button onClick={()=>setStatus("Client")} >client</button>
<div>
    <p>admin pannel</p>
</div>

{renderContent()}

    </>
  )
}

export default About