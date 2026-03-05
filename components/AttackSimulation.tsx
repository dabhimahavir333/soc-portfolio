"use client"

import { useState } from "react"

export default function AttackSimulation(){

const [logs,setLogs]=useState<string[]>([])

function simulateAttack(){

setLogs([])

const sequence=[

"⚠ Ransomware activity detected",
"Suspicious PowerShell command executed",
"Privilege escalation attempt",
"Mass file encryption detected",
"SIEM alert triggered",
"Firewall blocking malicious IP",
"Endpoint isolated from network",
"Incident response initiated"

]

sequence.forEach((step,i)=>{

setTimeout(()=>{

setLogs(prev=>[...prev,step])

},i*1500)

})

}

return(

<div className="font-mono text-sm">

<button
onClick={simulateAttack}
className="border px-3 py-1 mb-4 hover:bg-green-900/40"
>

Simulate Ransomware Attack

</button>

<div className="space-y-1">

{logs.map((log,i)=>(

<div key={i} className="text-red-400">

> {log}

</div>

))}

</div>

</div>

)

}