"use client"
import { useEffect, useState } from "react"

export default function ThreatStats(){

const [alerts,setAlerts]=useState(5)
const [attacks,setAttacks]=useState(23)
const [blocked,setBlocked]=useState(12)

useEffect(()=>{

const interval=setInterval(()=>{

setAlerts(a=>a+Math.floor(Math.random()*2))
setAttacks(a=>a+Math.floor(Math.random()*3))
setBlocked(a=>a+Math.floor(Math.random()*2))

},4000)

return ()=>clearInterval(interval)

},[])

return(

<div className="grid grid-cols-3 gap-6 mb-6">

<div className="panel text-center">
<div className="text-sm">Active Alerts</div>
<div className="text-3xl font-bold">{alerts}</div>
</div>

<div className="panel text-center">
<div className="text-sm">Attacks Detected</div>
<div className="text-3xl font-bold">{attacks}</div>
</div>

<div className="panel text-center">
<div className="text-sm">Threats Blocked</div>
<div className="text-3xl font-bold">{blocked}</div>
</div>

</div>

)
}