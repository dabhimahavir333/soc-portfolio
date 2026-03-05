"use client"

import { useEffect, useState } from "react"

export default function IncidentTimeline(){

const [events,setEvents]=useState<string[]>([])

useEffect(()=>{

const logs=[

"Brute force attack detected",
"Analyst investigation started",
"Threat intelligence lookup",
"Suspicious IP identified",
"Firewall rule deployed",
"Incident contained"

]

const interval=setInterval(()=>{

const time=new Date().toLocaleTimeString()

setEvents(prev=>[`${time}  ${logs[Math.floor(Math.random()*logs.length)]}`,...prev].slice(0,8))

},5000)

return()=>clearInterval(interval)

},[])

return(

<div className="h-64 overflow-y-auto text-sm font-mono">

{events.map((e,i)=>(

<div key={i} className="mb-1 text-green-400">
{e}
</div>

))}

</div>

)

}