"use client"

import {useEffect,useState} from "react"

export default function ThreatSeverity(){

const levels=["LOW","MEDIUM","HIGH","CRITICAL"]

const [level,setLevel]=useState("LOW")

useEffect(()=>{

const interval=setInterval(()=>{

const random=levels[Math.floor(Math.random()*levels.length)]

setLevel(random)

},5000)

return ()=>clearInterval(interval)

},[])

const color={
LOW:"text-green-400",
MEDIUM:"text-yellow-400",
HIGH:"text-orange-400",
CRITICAL:"text-red-500"
}[level]

return(

<div className="panel mb-6 flex justify-between items-center">

<div>

Threat Severity Level

</div>

<div className={`text-lg font-bold ${color}`}>

{level}

</div>

</div>

)

}