"use client"

import { useEffect, useState, useRef } from "react"

export default function Terminal(){

const [logs,setLogs]=useState<string[]>([])

const terminalRef = useRef<HTMLDivElement>(null)

const commands=[

"> Scanning network...",
"> Collecting logs...",
"> Running threat intel lookup",
"> Suspicious login detected",
"> Firewall rule deployed",
"> Incident report generated"

]

useEffect(()=>{

const interval=setInterval(()=>{

const cmd=commands[Math.floor(Math.random()*commands.length)]

setLogs(prev=>[...prev,cmd].slice(-50))

},1800)

return()=>clearInterval(interval)

},[])

useEffect(()=>{

if(terminalRef.current){
terminalRef.current.scrollTop = terminalRef.current.scrollHeight
}

},[logs])

return(

<div
ref={terminalRef}
className="h-[320px] overflow-y-auto font-mono text-sm pr-2"
>

{logs.map((log,i)=>(

<div key={i}>{log}</div>

))}

</div>

)

}