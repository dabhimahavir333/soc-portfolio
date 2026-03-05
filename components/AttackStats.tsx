"use client"

import {useState,useEffect} from "react"

export default function AttackStats(){

const [alerts,setAlerts]=useState(5)
const [attacks,setAttacks]=useState(28)
const [blocked,setBlocked]=useState(11)

useEffect(()=>{

const interval=setInterval(()=>{

setAlerts(a=>a+Math.floor(Math.random()*2))
setAttacks(a=>a+Math.floor(Math.random()*3))
setBlocked(a=>a+Math.floor(Math.random()*2))

},4000)

return()=>clearInterval(interval)

},[])

return(

<div className="grid grid-cols-3 gap-4">

<div className="panel text-center">

<div className="text-sm opacity-70">ACTIVE ALERTS</div>

<div className="text-2xl mt-1">{alerts}</div>

</div>


<div className="panel text-center">

<div className="text-sm opacity-70">ATTACKS DETECTED</div>

<div className="text-2xl mt-1">{attacks}</div>

</div>


<div className="panel text-center">

<div className="text-sm opacity-70">THREATS BLOCKED</div>

<div className="text-2xl mt-1">{blocked}</div>

</div>

</div>

)

}